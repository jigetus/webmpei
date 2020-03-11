import React, { Component } from "react";
import Logo from "./Logo/Logo";
import Files from "./Files/Files";

class Leftmenu extends Component {
  render() {
    return (
      <div className={"leftmenu"}>
        <Logo />
        <Files />
      </div>
    );
  }
}

export default Leftmenu;
