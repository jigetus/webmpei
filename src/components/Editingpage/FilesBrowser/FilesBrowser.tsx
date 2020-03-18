import React, { Component, CSSProperties } from "react";
import Files from "./Files/Files";

interface IState {
  leftmenuwidth?: any;
}

class FilesBrowser extends Component<IState> {
  constructor(props: any) {
    super(props);
  }
  render() {
    // const { leftmenuwidth } = this.state;
    return (
      <div className={"leftmenu panel sidebar"}>
        <Files />
        {/*<div className={"separator"} />*/}
      </div>
    );
  }
}

export default FilesBrowser;
