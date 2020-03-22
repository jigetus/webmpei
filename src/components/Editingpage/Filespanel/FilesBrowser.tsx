import React, { Component } from "react";
import Files from "./Files/Files";

interface IState {
  leftmenuwidth?: any;
}

class FilesBrowser extends Component<IState> {
  render() {
    // const { leftmenuwidth } = this.state;
    return (
      <div className={"filespanel"}>
        <Files />
      </div>
    );
  }
}

export default FilesBrowser;
