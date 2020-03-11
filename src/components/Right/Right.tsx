import React, { Component } from "react";
import Tabbar from "./Tabbar/Tabbar";
import Editor from "./Editor/Editor";

class Right extends Component {
  render() {
    return (
      <div className={"right"}>
        <Tabbar />
        <Editor mode={"html"} theme={"github"} defaultvalue={"123"} />
      </div>
    );
  }
}

export default Right;
