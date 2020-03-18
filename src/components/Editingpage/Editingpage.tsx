import React, { Component } from "react";
import FilesBrowser from "./FilesBrowser/FilesBrowser";
import Right from "./Right/Right";

class Editingpage extends Component {
  render() {
    return (
      <>
        <FilesBrowser />
        <Right />
      </>
    );
  }
}

export default Editingpage;
