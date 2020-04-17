import React, { Component } from "react";
import File from "./File/File";
import { AppState } from "../../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { IFile } from "../../../../redux/Files/types";

class Files extends Component<PropsFromRedux> {
  displayRecursion(childern: any) {
    return childern.map((item: IFile) => {
      return <File file={item} key={item.path} />;
    });
  }

  render() {
    const { activeProjectName } = this.props;
    const { files } = this.props;
    let activeFiles = null;
    files.map((item: IFile) => {
      if (item.filename === activeProjectName) {
        activeFiles = item.children;
      }
      return null;
    });
    return (
      <div className={"filescontainer"}>
        {this.displayRecursion(activeFiles)}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  files: state.files.files,
  activeProjectName: state.editor.activeProjectName
});

const connector = connect(mapStateToProps, {});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Files);
