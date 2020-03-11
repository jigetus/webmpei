import React, { Component } from "react";
import CSS from "csstype";

interface IFile {
  type: string;
  name: string;
  level: number;
  data?: Object;
}

class Files extends Component<IFile> {
  constructor(props: IFile) {
    super(props);
  }
  render() {
    const { name, level, type } = this.props;
    const css: CSS.Properties = {
      paddingLeft: `${5 * level * 3}px`
    };
    return (
      <div className={"file"} style={css}>
        <img src={`../file_icons/${type}.png`} /> <div>{name}</div>
      </div>
    );
  }
}

export default Files;
