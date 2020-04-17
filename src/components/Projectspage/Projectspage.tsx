import React, { Component } from "react";
import { AppState } from "../../redux";
import { connect, ConnectedProps } from "react-redux";
import { IFile } from "../../redux/Files/types";

import { ThemeProvider } from "@material-ui/styles";
import theme from "../../utils/Colors";
import Button from "@material-ui/core/Button";
import { changeActiveProject, ClearTabs } from "../../redux/Editor/actions";
import { withRouter } from "react-router-dom";
import { edit } from "react-icons-kit/typicons/edit";
import { pen } from "react-icons-kit/typicons/pen";
import { ic_delete } from "react-icons-kit/md/ic_delete";

import { Icon } from "react-icons-kit";
import ReactTooltip from "react-tooltip";

interface ProjectspageSTATE {
  selectedProject: string | null;
}
class Projectspage extends Component<PropsFromRedux, ProjectspageSTATE> {
  state: Readonly<ProjectspageSTATE> = {
    selectedProject: null
  };
  renderProjects = () => {
    const { files } = this.props;
    return files.map((item: IFile) => (
      <div
        key={item.path}
        className={
          this.state.selectedProject === item.filename
            ? "projectcard projectcard_active"
            : "projectcard"
        }
        onClick={() => this.setState({ selectedProject: item.filename })}
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
        <div className="projectsbuttons">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              Новый проект
            </Button>
          </ThemeProvider>
        </div>
        <div className={"window"}>
          <div className="top">
            <div className="title">Мои проекты</div>
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
          <div className="windowcontent">{this.renderProjects()}</div>
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
