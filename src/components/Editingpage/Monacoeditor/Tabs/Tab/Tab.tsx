import React, { Component } from "react";
import SVGIcon from "../../../Filespanel/Files/File/SVGIcon";
import { AppState } from "../../../../../redux";
import { connect } from "react-redux";
import { RemoveTab, SetTab } from "../../../../../redux/Editor/actions";
import { IFile } from "../../../../../redux/Files/types";
import { IEditorState } from "../../../../../redux/Editor/types";

interface ITabProps {
  file: IFile;
  RemoveTab: Function;
  SetTab: Function;
  activetab: IFile;
  editor: IEditorState;
}

class Tab extends Component<ITabProps> {
  state = {
    isHovered: false
  };
  render() {
    const { filename, filetype, path } = this.props.file;
    const { RemoveTab } = this.props;
    const { activetab } = this.props;
    // @ts-ignore
    const isActive = activetab.path === path;
    return (
      <div
        className={isActive ? "tab active_tab noselect" : "tab noselect"}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
        onClick={() => {
          this.props.SetTab(this.props.file);
        }}
        onMouseDown={event => {
          // @ts-ignore
          if (event.button === 1) {
            RemoveTab(this.props.file);
          }
        }}
      >
        <SVGIcon name={filetype} />
        <span>{filename}</span>
        <div
          className="close-container"
          onClick={event => {
            event.stopPropagation();
            RemoveTab(this.props.file);
          }}
        >
          <SVGIcon name={"close"} isVisible={true} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  activetab: state.editor.activetab
});

const connector = connect(mapStateToProps, { RemoveTab, SetTab });

export default connector(Tab);
