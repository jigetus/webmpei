import React, { Component } from "react";
import File from "./File/File";

class Files extends Component {
  render() {
    return (
      <div className={"filescontainer"}>
        <File level={0} name={"test.js"} type={"js"} />
        <File level={1} name={"source.css"} type={"css"} />
        <File level={2} name={"index.html"} type={"html"} />
        <File level={3} name={"index.html"} type={"js"} />
        <File level={3} name={"start.php"} type={"php"} />
      </div>
    );
  }
}

export default Files;