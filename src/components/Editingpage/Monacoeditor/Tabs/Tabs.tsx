import React, { Component } from "react";
import Tab from "./Tab/Tab";
import { AppState } from "../../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { ITab } from "../../../../redux/Editor/types";

class Tabs extends Component<PropsFromRedux> {
  render() {
    const { tabs } = this.props;
    return (
      <div className={"tabs"}>
        {tabs.map((item: ITab) => (
          <Tab data={item} key={item.file.path} />
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
