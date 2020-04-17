import React, { Component } from "react";
import Files from "./Files/Files";
import { AppState } from "../../../redux";
import { connect, ConnectedProps } from "react-redux";

class FilesBrowser extends Component<PropsFromRedux> {
  render() {
    const { activeProjectName } = this.props;
    return (
      <div className={"filespanel"}>
        <h3>user/{activeProjectName}</h3>
        <Files />
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
