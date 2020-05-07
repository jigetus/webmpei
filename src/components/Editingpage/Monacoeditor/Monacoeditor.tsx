import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
import Tabs from "./Tabs/Tabs";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../../redux";
import { CreateEditor } from "../../../redux/Editor/actions";
import { SaveTabs } from "../../../redux/Files/actions";
import Controls from "./Controls/Controls";

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
class Monacoeditor extends Component<PropsFromRedux> {
  editorDidMount = (editor: any, monaco: any) => {
    this.props.CreateEditor(editor);
    editor.setModel(null);
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
      // @ts-ignore
      document.getElementById("save__btn").click();
    });
  };

  render() {
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
            language={"javascript"}
            value={""}
            editorWillMount={editor => {}}
            options={options}
            editorDidMount={this.editorDidMount}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({});

const connector = connect(mapStateToProps, { CreateEditor, SaveTabs });

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Monacoeditor);
