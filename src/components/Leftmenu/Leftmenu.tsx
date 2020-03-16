import React, { Component, CSSProperties } from "react";
import Logo from "./Logo/Logo";
import Files from "./Files/Files";
import ResizePanel from "react-resize-panel";

interface IState {
  leftmenuwidth?: any;
}

class Leftmenu extends Component<IState> {
  constructor(props: any) {
    super(props);
  }
  render() {
    // const { leftmenuwidth } = this.state;
    return (
      <ResizePanel direction="e">
        <div className={"leftmenu panel sidebar"}>
          <Logo />
          <Files />
          {/*<div className={"separator"} />*/}
        </div>
      </ResizePanel>
    );
  }
}

export default Leftmenu;
