import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
import test from "../../Utility/Tests";
import Tabs from "./Tabs/Tabs";
import Controls from "./Controls/Controls";
import { connect } from "react-redux";

class Monacoeditor extends Component {
  render() {
    const options = {
      // selectOnLineNumbers: true,
      automaticLayout: true,
      enableLiveAutocompletion: true,
      enableEmmet: true,
      minimap: {
        enabled: false
      },
      EditorAutoClosingStrategy: "always",
      formatOnPaste: true,
      scrollBeyondLastLine: false,
      verticalScrollbarSize: 5,
      verticalSliderSize: 0
    };
    return (
      <>
        <div className={"TabsAndControls"}>
          <Tabs />
          <Controls />
        </div>
        <div className={"editorpanel"}>
          <MonacoEditor
            width="100%"
            height="calc(100% - 8px)"
            language="javascript"
            theme="vs-light"
            value={test}
            editorWillMount={() => {}}
            options={options}
          />
        </div>
      </>
    );
  }
}

export default connect(null, null)(Monacoeditor);
//@ts-ignore
