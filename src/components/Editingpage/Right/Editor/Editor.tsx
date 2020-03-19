import React, { Component } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
const languages = ["javascript", "css", "html", "php"];
const themes = ["dracula", 'xcode'];
languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));
/*eslint-disable no-alert, no-console */

interface IEditor {
  mode: string;
  theme: string;
  defaultvalue: string;
}

class Editor extends Component<IEditor> {
  constructor(props: IEditor) {
    super(props);
  }
  componentDidMount(): void {}

  render() {
    const { mode, theme, defaultvalue } = this.props;
    return (
      <AceEditor
        mode={mode}
        theme={theme}
        onChange={() => null}
        name="ace"
        editorProps={{ $blockScrolling: true }}
        width={"100%"}
        height={"calc(100% - 40px)"}
        fontSize={18}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        defaultValue={defaultvalue}
        showPrintMargin={false}
        setOptions={{
          useWorker: false,
          highlightGutterLine: false
        }}
      />
    );
  }
}

export default Editor;
