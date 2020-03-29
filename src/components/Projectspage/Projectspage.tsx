import React, { Component } from "react";
import { AppState } from "../../redux";
import { connect, ConnectedProps } from "react-redux";
import { IFile } from "../../redux/Files/types";
import { motion } from "framer-motion";
import pageTransition from "../../utils/Routeanimation";
import Project from "./Project/Project";

class Projectspage extends Component<PropsFromRedux> {
  renderProjects = () => {
    const { files } = this.props;
    return files.map((item: IFile) => <h1>{item.filename}</h1>);
  };
  render() {
    return (
      <motion.div
        className={"container"}
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        {this.renderProjects()}
        <Project />
      </motion.div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  files: state.files.files
});

const connector = connect(mapStateToProps, {});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Projectspage);
