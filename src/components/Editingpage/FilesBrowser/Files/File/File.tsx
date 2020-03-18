import React, { Component } from "react";
import CSS from "csstype";
import SVGIcon from "./SVGIcon";

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
      paddingLeft: `${5 + level * 15}px`
    };
    return (
      <div className={"file"} style={css}>
        <SVGIcon name={type} /> <div>{name}</div>
      </div>
    );
  }
}

export default Files;
