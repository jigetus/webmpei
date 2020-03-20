import React, { Component } from "react";
import Tabbar from "./Tabbar/Tabbar";
import Editor from "./Editor/Editor";
const tmpText: string =
  'import React, { Component } from "react";\n' +
  'import AceEditor from "react-ace";\n' +
  "\n" +
  'import "ace-builds/src-min-noconflict/ext-searchbox";\n' +
  'import "ace-builds/src-min-noconflict/ext-language_tools";\n' +
  'const languages = ["javascript", "css"];\n' +
  "const themes = [\n" +
  '  "monokai",\n' +
  '  "github",\n' +
  '  "tomorrow",\n' +
  '  "kuroir",\n' +
  '  "twilight",\n' +
  '  "xcode",\n' +
  '  "textmate",\n' +
  '  "solarized_dark",\n' +
  '  "solarized_light",\n' +
  '  "terminal",\n' +
  '  "dracula"\n' +
  "];\n" +
  "languages.forEach(lang => {\n" +
  "  require(`ace-builds/src-noconflict/mode-${lang}`);\n" +
  "  require(`ace-builds/src-noconflict/snippets/${lang}`);\n" +
  "});\n" +
  "\n" +
  "themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));\n" +
  "/*eslint-disable no-alert, no-console */\n" +
  "\n" +
  "interface IEditor {\n" +
  "  mode: string;\n" +
  "  theme: string;\n" +
  "  defaultvalue: string;\n" +
  "}\n" +
  "\n" +
  "class Editor extends Component<IEditor> {\n" +
  "  constructor(props: IEditor) {\n" +
  "    super(props);\n" +
  "  }\n" +
  "  componentDidMount(): void {}\n" +
  "\n" +
  "  render() {\n" +
  "    const { mode, theme, defaultvalue } = this.props;\n" +
  "    return (\n" +
  "      <AceEditor\n" +
  "        mode={mode}\n" +
  "        theme={theme}\n" +
  "        onChange={() => null}\n" +
  '        name="ace"\n' +
  "        editorProps={{ $blockScrolling: true }}\n" +
  '        width={"100%"}\n' +
  '        height={"calc(100% - 50px)"}\n' +
  "        fontSize={25}\n" +
  "        enableLiveAutocompletion={true}\n" +
  "        enableSnippets={true}\n" +
  "        defaultValue={defaultvalue}\n" +
  "        showPrintMargin={false}\n" +
  "        setOptions={{\n" +
  "          useWorker: false,\n" +
  "          highlightGutterLine: false\n" +
  "        }}\n" +
  "      />\n" +
  "    );\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "export default Editor;\n";

class Editorpanel extends Component {
  render() {
    return (
      <div className={"editorpanel"}>
        <Tabbar />
        <Editor mode={"javascript"} theme={"xcode"} defaultvalue={tmpText} />
      </div>
    );
  }
}

export default Editorpanel;
