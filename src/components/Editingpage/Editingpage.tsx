import React, { Component } from "react";
import FilesBrowser from "./Filespanel/FilesBrowser";
import Previewpanel from "./Previewpanel/Previewpanel";
import SplitterLayout from "react-splitter-layout";
import { connect, ConnectedProps } from "react-redux";
import "react-splitter-layout/lib/index.css";
import Monacoeditor from "./Monacoeditor/Monacoeditor";
import {
  changeFilebrowserWidth,
  changePreviewWidth,
  RestoreActiveTab,
  SetPreviewResize
} from "../../redux/Editor/actions";
import { AppState } from "../../redux";
import { withRouter } from "react-router-dom";
import ReactTooltip from "react-tooltip";

interface IEditingpageState {
  filebrowserWidth: number;
  previewWidth: number;
}
class Editingpage extends Component<PropsFromRedux, IEditingpageState> {
  constructor(props: PropsFromRedux) {
    super(props);
    const { filebrowserWidth, previewWidth } = this.props;
    this.state = {
      filebrowserWidth,
      previewWidth
    };
  }
  componentDidMount(): void {
    ReactTooltip.hide();
    const { tabs, RestoreActiveTab } = this.props;
    if (tabs.length !== 0) {
      RestoreActiveTab();
    }
  }

  render() {
    const {
      filebrowserWidth,
      previewWidth,
      activeProjectName,
      preview_visible,
      SetPreviewResize
    } = this.props;
    if (activeProjectName === null) {
      return (
        <div
          className={"container"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <h3 style={{ color: "grey" }}>
            Сначала необходимо выбрать проект для редактирования.
          </h3>
        </div>
      );
    }

    return (
      <div className={"editing-container"}>
        <SplitterLayout
          primaryIndex={1}
          secondaryInitialSize={filebrowserWidth}
          onSecondaryPaneSizeChange={(size: number) => {
            this.setState({ filebrowserWidth: size });
          }}
          onDragEnd={() => {
            window.dispatchEvent(new Event("resize"));
            this.props.changeFilebrowserWidth(this.state.filebrowserWidth);
          }}
        >
          <FilesBrowser />
          <SplitterLayout
            secondaryInitialSize={previewWidth}
            onSecondaryPaneSizeChange={(size: number) => {
              this.setState({ previewWidth: size });
            }}
            onDragEnd={() => {
              SetPreviewResize(false);
              window.dispatchEvent(new Event("resize"));
              this.props.changePreviewWidth(this.state.previewWidth);
            }}
            onDragStart={() => {
              SetPreviewResize(true);
            }}
          >
            <SplitterLayout
              vertical
              onDragEnd={() => {
                window.dispatchEvent(new Event("resize"));
              }}
            >
              <Monacoeditor />
            </SplitterLayout>
            {preview_visible ? <Previewpanel /> : null}
          </SplitterLayout>
        </SplitterLayout>
        <ReactTooltip effect={"solid"} place={"bottom"} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  filebrowserWidth: state.editor.filebrowserWidth,
  previewWidth: state.editor.previewWidth,
  activeProjectName: state.editor.activeProjectName,
  preview_visible: state.editor.preview_visible,
  tabs: state.editor.tabs
});

const connector = connect(mapStateToProps, {
  changeFilebrowserWidth,
  changePreviewWidth,
  SetPreviewResize,
  RestoreActiveTab
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(withRouter(Editingpage));
