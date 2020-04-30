import React, { Component } from "react";
import Files from "./Files/Files";
import { AppState } from "../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { ic_add } from "react-icons-kit/md/ic_add";
import Icon from "react-icons-kit";
import ReactTooltip from "react-tooltip";

class FilesBrowser extends Component<PropsFromRedux> {
  render() {
    const { activeProjectName } = this.props;
    return (
      <div className={"filespanel"}>
        <div className={"filescontrols"}>
          <h3>{activeProjectName}</h3>
          <Icon size={28} icon={ic_add} data-tip="Создать файл" />
        </div>

        <Files />
        <ReactTooltip effect={"solid"} place={"bottom"} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  activeProjectName: state.editor.activeProjectName
});

const connector = connect(mapStateToProps, {});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(FilesBrowser);
