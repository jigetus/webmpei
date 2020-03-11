import React, { Component } from "react";
import Tab from "./Tab/Tab";

class Tabbar extends Component {
  render() {
    return (
      <div className={"tabsContainer"}>
        <Tab filename={"index.html"} isActive={false} />
        <Tab filename={"index.js"} isActive={false} />
        <Tab filename={"main.css"} isActive={true} />
        <Tab filename={"server.php"} isActive={false} />
      </div>
    );
  }
}

export default Tabbar;
