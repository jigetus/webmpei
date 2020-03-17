import React, { Component, CSSProperties } from "react";
import Logo from "./Logo/Logo";
import Files from "./Files/Files";

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
      <div className={"leftmenu panel sidebar"}>
        <Logo />
        <Files />
        {/*<div className={"separator"} />*/}
      </div>
    );
  }
}

export default Leftmenu;
