import React, { Component } from "react";
import { AppState } from "../../redux";
import { connect, ConnectedProps } from "react-redux";
import { IFile } from "../../redux/Files/types";
import { changeActiveProject, ClearTabs } from "../../redux/Editor/actions";
import { withRouter } from "react-router-dom";
import { edit } from "react-icons-kit/typicons/edit";
import { pen } from "react-icons-kit/typicons/pen";
import { ic_delete } from "react-icons-kit/md/ic_delete";

import { Icon } from "react-icons-kit";
import ReactTooltip from "react-tooltip";
import AddProject from "./AddProject/AddProject";

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
          У вас еще нет проектов 😟
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
                  onClick={() => {}}
                />
                <Icon
                  icon={ic_delete}
                  size={24}
                  data-tip={"Удалить"}
                  onClick={() => {}}
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
  files: state.files.files
});

const connector = connect(mapStateToProps, { changeActiveProject, ClearTabs });

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(withRouter(Projectspage));
