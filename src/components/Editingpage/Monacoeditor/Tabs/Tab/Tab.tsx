import React, { Component } from "react";
import SVGIcon from "../../../Filespanel/Files/File/SVGIcon";
import { AppState } from "../../../../../redux";
import { connect } from "react-redux";
import { RemoveTab, SetTab } from "../../../../../redux/Editor/actions";
import { ITab } from "../../../../../redux/Editor/types";

interface ITabProps {
  data: ITab;
  RemoveTab: Function;
  SetTab: Function;
}

class Tab extends Component<ITabProps> {
  state = {
    isHovered: false
  };
  render() {
    const { filename, filetype, path } = this.props.data.file;
    const { RemoveTab } = this.props;
    const { isActive } = this.props.data;

    return (
      <div
        className={isActive ? "tab active_tab noselect" : "tab noselect"}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
        onClick={() => {
          if (!isActive) this.props.SetTab(path);
        }}
        onMouseDown={event => {
          // @ts-ignore
          if (event.button === 1) {
            RemoveTab(path);
          }
        }}
      >
        <SVGIcon name={filetype} />
        <span>{filename}</span>
        <div
          className="close-container"
          onClick={event => {
            event.stopPropagation();
            RemoveTab(path);
          }}
        >
          <SVGIcon name={"close"} isVisible={true} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({ tabs: state.editor.tabs });

const connector = connect(mapStateToProps, { RemoveTab, SetTab });

export default connector(Tab);
