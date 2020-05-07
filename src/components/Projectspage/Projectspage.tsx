import React, { Component } from "react";
import { AppState } from "../../redux";
import { connect, ConnectedProps } from "react-redux";
import { IFile } from "../../redux/Files/types";
import { changeActiveProject, ClearTabs } from "../../redux/Editor/actions";
import { withRouter } from "react-router-dom";
import { edit } from "react-icons-kit/typicons/edit";
import { pen } from "react-icons-kit/typicons/pen";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import { download } from "react-icons-kit/fa/download";

import { Icon } from "react-icons-kit";
import ReactTooltip from "react-tooltip";
import AddProject from "./AddProject/AddProject";
import postData from "../../utils/functions";
import { toast } from "react-toastify";
import { fetchFilesSuccess } from "../../redux/Files/actions";

interface ProjectspageSTATE {
  selectedProject: string | null;
}
class Projectspage extends Component<PropsFromRedux, ProjectspageSTATE> {
  state: Readonly<ProjectspageSTATE> = {
    selectedProject: null
  };
  renderProjects = () => {
    const { files } = this.props;
    if (files.length === 0)
      return (
        <h4
          style={{
            margin: "0 auto",
            paddingTop: "100px",
            color: "grey"
          }}
        >
          У вас еще нет проектов{" "}
          <span role={"img"} aria-label={"sad"}>
            😟
          </span>
        </h4>
      );
    return files.map((item: IFile) => (
      <div
        key={item.path}
        className={
          this.state.selectedProject === item.filename
            ? "projectcard projectcard_active noselect"
            : "projectcard noselect"
        }
        onClick={e => {
          e.stopPropagation();
          this.setState({ selectedProject: item.filename });
        }}
      >
        <img
          src="https://findicons.com/files/icons/766/base_software/128/folderopened_yellow.png"
          alt=""
        />
        {/*<Icon icon={listAlt} size={32} style={{ color: "lightgrey" }} />*/}
        <span>{item.filename}</span>
      </div>
    ));
  };
  componentDidUpdate(
    prevProps: Readonly<PropsFromRedux>,
    prevState: Readonly<ProjectspageSTATE>,
    snapshot?: any
  ): void {
    ReactTooltip.rebuild();
  }
  deleteHandle = () => {
    const request = {
      operation: "delete",
      projectname: this.state.selectedProject
    };
    if (
      window.confirm(
        `Вы действительно хотите удалить проект "${this.state.selectedProject}"?`
      )
    ) {
      postData("api/projectsoperations.php", request).then(res => {
        if (this.state.selectedProject === this.props.activeProjectName) {
          this.props.changeActiveProject(null);
          this.props.ClearTabs();
        }
        if (res.code === 200) {
          toast.info(res.data.message);
          this.props.fetchFilesSuccess(res.data.files);
          this.setState({ selectedProject: null });
        } else {
          toast.error(res.data);
        }
      });
    }
  };
  downloadHandle = () => {
    const request = {
      operation: "download",
      projectname: this.state.selectedProject
    };
    postData("api/projectsoperations.php", request, true).then(res => {
      res.blob().then((blob: Blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = `${this.state.selectedProject}.zip`;
        a.click();
      });
    });
  };

  renameHandle = () => {
    const { selectedProject } = this.state;
    const new_name = window.prompt(
      "Введите новое имя проекта:",
      selectedProject != null ? selectedProject : ""
    );
    if (new_name === null) {
      return false;
    } else {
      if (new_name === this.state.selectedProject) return false;
      if (this.state.selectedProject === this.props.activeProjectName) {
        this.props.changeActiveProject(null);
        this.props.ClearTabs();
      }
      const request = {
        operation: "rename",
        projectname: this.state.selectedProject,
        newname: new_name
      };
      postData("api/projectsoperations.php", request).then(res => {
        if (res.code === 200) {
          this.props.fetchFilesSuccess(res.data.files);
          this.setState({ selectedProject: null });
          toast.info(res.data.message);
        }
        if (res.code === 400) {
          toast.error(res.data.message);
        }
      });
    }
  };

  render() {
    const { changeActiveProject, ClearTabs } = this.props;
    return (
      <div className={"container projectscontainer"}>
        <AddProject />
        <div className={"window"}>
          <div className="top">
            <div className="title noselect">Мои проекты</div>
            {this.state.selectedProject != null ? (
              <div className="projectsbuttons2">
                <Icon
                  icon={edit}
                  size={24}
                  onClick={() => {
                    changeActiveProject(this.state.selectedProject);
                    ClearTabs();
                    this.props.history.push("/editor");
                  }}
                  data-tip={"Открыть в редакторе"}
                />
                <Icon
                  icon={pen}
                  size={24}
                  data-tip={"Переименовать"}
                  onClick={this.renameHandle}
                />
                <Icon
                  icon={ic_delete}
                  size={24}
                  data-tip={"Удалить"}
                  onClick={this.deleteHandle}
                />
                <Icon
                  icon={download}
                  size={24}
                  data-tip={"Скачать проект"}
                  onClick={this.downloadHandle}
                />
              </div>
            ) : null}
          </div>
          <div
            className="windowcontent"
            onClick={() => this.setState({ selectedProject: null })}
          >
            {this.renderProjects()}
          </div>
        </div>
        <ReactTooltip effect={"solid"} place={"bottom"} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  files: state.files.files,
  activeProjectName: state.editor.activeProjectName
});

const connector = connect(mapStateToProps, {
  changeActiveProject,
  ClearTabs,
  fetchFilesSuccess
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(withRouter(Projectspage));
