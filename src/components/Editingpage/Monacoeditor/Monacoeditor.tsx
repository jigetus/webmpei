import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
import Tabs from "./Tabs/Tabs";
import Controls from "./Controls/Controls";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../../redux";
// import IStandaloneCodeEditor from "react-monaco-editor/src";
import { CreateEditor, EditTab } from "../../../redux/Editor/actions";

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
  // editor: IStandaloneCodeEditor | object = {};
  editorDidMount = (editor: any, monaco: any) => {
    console.log("editordidmount");
    // this.props.CreateEditor(monaco.editor);
    // console.log(monaco.editor);
    // editor.setValue("testings....");
    // editor.setValue("new value");
    // editor.focus();
  };

  render() {
    const { activetab, EditTab } = this.props;
    return (
      <>
        <div className={"TabsAndControls"}>
          <Tabs />
          <Controls />
        </div>
        <div className={"editorpanel"}>
          {activetab != null ? (
            <MonacoEditor
              width="100%"
              height="calc(100% - 8px)"
              language={
                activetab.filetype === "js" ? "javascript" : activetab.filetype
              }
              value={activetab.filedata}
              editorWillMount={editor => {}}
              onChange={text => {
                EditTab(text);
              }}
              options={options}
              editorDidMount={this.editorDidMount}
              ref="monaco"
            />
          ) : (
            <h3>Выберите файл для редактирования</h3>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  activetab: state.editor.activetab
});

const connector = connect(mapStateToProps, { CreateEditor, EditTab });

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Monacoeditor);
