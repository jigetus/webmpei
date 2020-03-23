import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";

class Monacoeditor extends Component {
  render() {
    const options = {
      selectOnLineNumbers: true,
      automaticLayout: true,
      enableLiveAutocompletion: true,
      enableEmmet: true
      // wordWrap: "on"
    };
    return (
      <MonacoEditor
        width="100%"
        height="calc(100vh - 100px)"
        language="html"
        theme="vs-light"
        value={"const abs = 'hello world'"}
        editorWillMount={() => {}}
        options={options}
      />
    );
  }
}

export default Monacoeditor;
//@ts-ignore
