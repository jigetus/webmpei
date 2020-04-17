import React, { Component } from "react";
import { AppState } from "../../../redux";
import { connect } from "react-redux";

class Project extends Component<PropsFromRedux> {
  generateColor(): string {
    return (
      "#" +
      Math.random()
        .toString(16)
        .substr(-6)
    );
  }
  render() {
    return <h1>Hello</h1>;
  }
}

const mapStateToProps = (state: AppState) => ({
  files: state.files.files
});

const connector = connect(mapStateToProps, {});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Project);
