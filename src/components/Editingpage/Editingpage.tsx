import React, { Component } from "react";
import FilesBrowser from "./Filespanel/FilesBrowser";
import Editorpanel from "./Editorpanel/Editorpanel";
import Previewpanel from "./Previewpanel/Previewpanel";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";

interface IEditingpage {
  filespanelsize: number;
  previewpanelsize: number;
}

class Editingpage extends Component<IEditingpage> {
  render() {
    const { filespanelsize, previewpanelsize } = this.props;
    return (
      <div className={"editing-container"}>
        <SplitterLayout
          primaryIndex={1}
          secondaryInitialSize={filespanelsize}
          onSecondaryPaneSizeChange={(size: number) => {}}
          onDragEnd={() => window.dispatchEvent(new Event("resize"))}
        >
          <FilesBrowser />
          <SplitterLayout
            secondaryInitialSize={previewpanelsize}
            onSecondaryPaneSizeChange={(size: number) => {}}
            onDragEnd={() => window.dispatchEvent(new Event("resize"))}
          >
            <SplitterLayout
              vertical
              onSecondaryPaneSizeChange={(size: number) => {}}
              onDragEnd={() => window.dispatchEvent(new Event("resize"))}
            >
              <Editorpanel />
            </SplitterLayout>
            <Previewpanel />
          </SplitterLayout>
        </SplitterLayout>
      </div>
    );
  }
}

export default Editingpage;
