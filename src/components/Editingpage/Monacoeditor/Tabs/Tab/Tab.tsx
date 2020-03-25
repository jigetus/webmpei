import React, { Component } from "react";
import SVGIcon from "../../../Filespanel/Files/File/SVGIcon";

interface ITabProps {
  filename: string;
  filetype: string;
  isActive: boolean;
}

class Tab extends Component<ITabProps> {
  state = {
    isHovered: false
  };
  render() {
    const { filename, filetype, isActive } = this.props;
    return (
      <div
        className={isActive ? "tab active_tab" : "tab"}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <SVGIcon name={filetype} />
        <span>{filename}</span>
        <div className="close-container" onClick={() => alert("tab close")}>
          <SVGIcon
            name={"close"}
            isVisible={this.state.isHovered || isActive}
          />
        </div>
      </div>
    );
  }
}

export default Tab;
