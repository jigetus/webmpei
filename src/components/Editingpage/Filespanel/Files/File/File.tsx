import React, { Component } from "react";
import SVGIcon from "./SVGIcon";
import { AppState } from "../../../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { AddTab, SetTab } from "../../../../../redux/Editor/actions";
import { IFile } from "../../../../../redux/Files/types";
import { editor } from "monaco-editor";
import { ITab } from "../../../../../redux/Editor/types";
import { Menu, Item, MenuProvider } from "react-contexify";

interface IFile1 {
  file: IFile;
  AddTab: Function;
  SetTab: Function;
}

class File extends Component<IFile1> {
  // create your menu first
  render() {
    const { filename, filetype, filedata, path } = this.props.file;
    const { AddTab, SetTab } = this.props;
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
          <Item onClick={() => alert("test")}>
            <span style={{ fontSize: 14 }}>Переименовать</span>
          </Item>
          <Item onClick={() => alert("test")}>
            <span style={{ fontSize: 14 }}>Открыть в предпросмотре</span>
          </Item>
          <Item onClick={() => alert("test")}>
            <span style={{ color: "#c77c8b", fontSize: 14 }}>Удалить</span>
          </Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({ tabs: state.editor.tabs });

const connector = connect(mapStateToProps, { AddTab, SetTab });

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(File);
