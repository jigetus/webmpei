import React, { Component } from "react";
import Tab from "./Tab/Tab";

class Tabs extends Component {
  render() {
    return (
      <div className={"tabs"}>
        <Tab filename={"index.html"} filetype={"html"} isActive={false} />
        <Tab filename={"class.css"} filetype={"css"} isActive={false} />
        <Tab filename={"main.js"} filetype={"js"} isActive={true} />
        <Tab filename={"index.html"} filetype={"html"} isActive={false} />
      </div>
    );
  }
}

export default Tabs;
