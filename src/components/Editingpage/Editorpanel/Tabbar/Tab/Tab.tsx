import React, { Component } from "react";

interface ITab {
  filename: string;
  isActive: boolean;
}

class Tab extends Component<ITab> {
  render() {
    const { filename, isActive } = this.props;
    return <div className={isActive ? "tab_active" : "tab"}>{filename}</div>;
  }
}

export default Tab;
