const test =
  'import React, { Component } from "react";\n' +
  'import MonacoEditor from "react-monaco-editor";\n' +
  "\n" +
  "class Monacoeditor extends Component {\n" +
  "  render() {\n" +
  "    const options = {\n" +
  "      // selectOnLineNumbers: true,\n" +
  "      automaticLayout: true,\n" +
  "      enableLiveAutocompletion: true,\n" +
  "      enableEmmet: true,\n" +
  "      minimap: {\n" +
  "        enabled: false\n" +
  "      },\n" +
  "      accessibilityPageSize: 50\n" +
  "    };\n" +
  "    return (\n" +
  '      <div className={"editorpanel"}>\n' +
  "        <MonacoEditor\n" +
  '          width="100%"\n' +
  '          height="calc(100vh - 100px)"\n' +
  '          language="javascript"\n' +
  '          theme="vs-light"\n' +
  "          value={\"const abs = 'hello world'\"}\n" +
  "          editorWillMount={() => {}}\n" +
  "          options={options}\n" +
  "        />\n" +
  "      </div>\n" +
  "    );\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "export default Monacoeditor;\n" +
  "//@ts-ignore\n" +
  'import React, { Component } from "react";\n' +
  'import MonacoEditor from "react-monaco-editor";\n' +
  "\n" +
  "class Monacoeditor extends Component {\n" +
  "  render() {\n" +
  "    const options = {\n" +
  "      // selectOnLineNumbers: true,\n" +
  "      automaticLayout: true,\n" +
  "      enableLiveAutocompletion: true,\n" +
  "      enableEmmet: true,\n" +
  "      minimap: {\n" +
  "        enabled: false\n" +
  "      },\n" +
  "      accessibilityPageSize: 50\n" +
  "    };\n" +
  "    return (\n" +
  '      <div className={"editorpanel"}>\n' +
  "        <MonacoEditor\n" +
  '          width="100%"\n' +
  '          height="calc(100vh - 100px)"\n' +
  '          language="javascript"\n' +
  '          theme="vs-light"\n' +
  "          value={\"const abs = 'hello world'\"}\n" +
  "          editorWillMount={() => {}}\n" +
  "          options={options}\n" +
  "        />\n" +
  "      </div>\n" +
  "    );\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "export default Monacoeditor;\n" +
  "//@ts-ignore\n";
export default test;
