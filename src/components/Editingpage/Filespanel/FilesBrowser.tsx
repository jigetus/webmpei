import React, { Component } from "react";
import Files from "./Files/Files";
import { AppState } from "../../../redux";
import { connect, ConnectedProps } from "react-redux";
import ReactTooltip from "react-tooltip";
import Newfile from "./Newfile/Newfile";

class FilesBrowser extends Component<PropsFromRedux> {
  render() {
    const { activeProjectName } = this.props;
    return (
      <div className={"filespanel"}>
        <div className={"filescontrols"}>
          <h3>{activeProjectName}</h3>
          <Newfile />
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
