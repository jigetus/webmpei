import React, { Component } from "react";
import SVGIcon from "./SVGIcon";
import { AppState } from "../../../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { AddTab, SetTab } from "../../../../../redux/Editor/actions";
import { IFile } from "../../../../../redux/Files/types";

interface IFile1 {
  file: IFile;
  AddTab: Function;
  SetTab: Function;
}

class File extends Component<IFile1> {
  render() {
    const { filename, filetype } = this.props.file;
    const { AddTab, SetTab } = this.props;

    return (
      <div
        className={"file"}
        onClick={() => {
          AddTab(this.props.file);
          SetTab(this.props.file);
        }}
      >
        <SVGIcon name={filetype} />
        <div>{filename}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({});

const connector = connect(mapStateToProps, { AddTab, SetTab });

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(File);
