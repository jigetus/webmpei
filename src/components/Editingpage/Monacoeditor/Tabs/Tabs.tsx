import React, { Component } from "react";
import Tab from "./Tab/Tab";
import { AppState } from "../../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { IFile } from "../../../../redux/Files/types";

class Tabs extends Component<PropsFromRedux> {
  render() {
    const { tabs } = this.props;
    return (
      <div className={"tabs"}>
        {tabs.map((item: IFile) => (
          <Tab file={item} key={item.path} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  tabs: state.editor.tabs
});

const connector = connect(mapStateToProps, {});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Tabs);
