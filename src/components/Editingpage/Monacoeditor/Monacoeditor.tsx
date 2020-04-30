import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
import Tabs from "./Tabs/Tabs";
import Controls from "./Controls/Controls";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../../redux";
import { CreateEditor } from "../../../redux/Editor/actions";

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
  };

  render() {
    const isVisible = true;
    if (isVisible) {
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
              onChange={text => {
                // EditTab(text);
              }}
              options={options}
              editorDidMount={this.editorDidMount}
              ref="monaco"
            />
          </div>
        </>
      );
    } else {
      return <h3>Выберите файл для редактирования</h3>;
    }
  }
}

const mapStateToProps = (state: AppState) => ({});

const connector = connect(mapStateToProps, { CreateEditor });

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Monacoeditor);
