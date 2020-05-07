import React, { Component } from "react";
import SVGIcon from "./SVGIcon";
import { AppState } from "../../../../../redux";
import { connect, ConnectedProps } from "react-redux";
import {
  AddTab,
  SetPreviewPath,
  SetTab
} from "../../../../../redux/Editor/actions";
import { IFile } from "../../../../../redux/Files/types";
import { editor } from "monaco-editor";
import { ITab } from "../../../../../redux/Editor/types";
import { Menu, Item, MenuProvider } from "react-contexify";
import { toast } from "react-toastify";
import { fetchFilesSuccess } from "../../../../../redux/Files/actions";
import { IUserInfo } from "../../../../../redux/App/types";
import postData from "../../../../../utils/functions";

interface IFile1 {
  file: IFile;
  AddTab: Function;
  SetTab: Function;
  SetPreviewPath: Function;
  tabs: Array<ITab>;
  fetchFilesSuccess: Function;
  user: IUserInfo;
  activeProjectName: string;
  preview_path: string;
}

class File extends Component<IFile1> {
  deleteHandler = () => {
    const {
      tabs,
      fetchFilesSuccess,
      user,
      preview_path,
      SetPreviewPath
    } = this.props;
    const { login } = user;
    const { path, filename } = this.props.file;
    let check = true;
    if (window.confirm(`Вы действительно хотите удалить файл "${filename}"?`)) {
      tabs.map((item: ITab) => {
        if (item.file.path === path) check = false;
        return item;
      });
      if (check) {
        const request = {
          operation: "delete",
          login,
          path,
          name: filename
        };
        postData("api/filesoperations.php", request).then(res => {
          if (res.code === 400) {
            toast.error(res.data);
          }
          if (res.code === 200) {
            toast.info(res.data.message);
            fetchFilesSuccess(res.data.files);
            if (preview_path === path) {
              SetPreviewPath(null);
            }
          }
        });
      } else {
        toast.error("Перед удалением закройте вкладку с файлом");
      }
    }
  };
  renameHandler = () => {
    const {
      tabs,
      fetchFilesSuccess,
      user,
      activeProjectName,
      preview_path,
      SetPreviewPath
    } = this.props;
    const { login } = user;
    const { path, filename } = this.props.file;
    let check = true;
    tabs.map((item: ITab) => {
      if (item.file.path === path) check = false;
      return item;
    });
    if (check) {
      const new_name = window.prompt(
        "Введите новое имя файла:",
        filename != null ? filename : ""
      );
      if (new_name !== null) {
        if (new_name !== "" && new_name !== filename) {
          // @ts-ignore
          const type = /[^.]*$/.exec(new_name)[0].toLocaleLowerCase();
          const name = new_name.substr(0, new_name.lastIndexOf("."));
          const request = {
            operation: "rename",
            project: activeProjectName,
            filename: name,
            filetype: type,
            login,
            path
          };
          postData("api/filesoperations.php", request).then(res => {
            if (res.code === 400) {
              toast.error(res.data);
            }
            if (res.code === 200) {
              toast.info(res.data.message);
              fetchFilesSuccess(res.data.files);
              if (preview_path === path) {
                SetPreviewPath(null);
              }
            }
          });
        } else {
          toast.error("Введите корректное имя файла");
        }
      }
    } else {
      toast.error("Сначала закройте вкладку с файлом");
    }
  };
  render() {
    const { filename, filetype, filedata, path } = this.props.file;
    const { AddTab, SetTab, SetPreviewPath } = this.props;
    const monacoeditor: any = editor;
    const tab: ITab = {
      file: this.props.file,
      model: monacoeditor.createModel(
        filedata,
        filetype === "js" ? "javascript" : filetype
      ),
      viewstate: null,
      isActive: false
    };
    return (
      <div>
        <MenuProvider id={path}>
          <div
            className={"file noselect"}
            onClick={() => {
              AddTab(tab);
              SetTab(this.props.file.path);
            }}
          >
            <SVGIcon name={filetype} />
            <div>{filename}</div>
          </div>
        </MenuProvider>

        <Menu id={path} theme={"light"}>
          <Item onClick={this.renameHandler}>
            <span style={{ fontSize: 14 }}>Переименовать</span>
          </Item>
          {filetype === "html" || filetype === "php" ? (
            <Item onClick={() => SetPreviewPath(path)}>
              <span style={{ fontSize: 14 }}>Открыть в предпросмотре</span>
            </Item>
          ) : null}
          {filetype === "html" || filetype === "php" ? (
            <Item
              onClick={() => {
                const edited_path = path.slice(2);
                const win = window.open(edited_path, "_blank");
                // @ts-ignore
                win.focus();
              }}
            >
              <span style={{ fontSize: 14 }}>Открыть в новой вкладке</span>
            </Item>
          ) : null}

          <Item onClick={this.deleteHandler}>
            <span style={{ color: "#c77c8b", fontSize: 14 }}>Удалить</span>
          </Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  tabs: state.editor.tabs,
  user: state.app.user,
  activeProjectName: state.editor.activeProjectName,
  preview_path: state.editor.preview_path
});

const connector = connect(mapStateToProps, {
  AddTab,
  SetTab,
  SetPreviewPath,
  fetchFilesSuccess
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(File);
