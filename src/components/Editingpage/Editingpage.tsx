import React, { Component } from "react";
import FilesBrowser from "./Filespanel/FilesBrowser";
import Previewpanel from "./Previewpanel/Previewpanel";
import SplitterLayout from "react-splitter-layout";
import { connect, ConnectedProps } from "react-redux";
import "react-splitter-layout/lib/index.css";
import { motion } from "framer-motion";
import pageTransition from "../../utils/Routeanimation";
import Monacoeditor from "./Monacoeditor/Monacoeditor";
import {
  changeFilebrowserWidth,
  changePreviewWidth
} from "../../redux/Editor/actions";
import { AppState } from "../../redux";

interface IEditingpageState {
  filebrowserWidth: number;
  previewWidth: number;
}
class Editingpage extends Component<PropsFromRedux, IEditingpageState> {
  constructor(props: PropsFromRedux) {
    super(props);
    const { filebrowserWidth, previewWidth } = this.props.editor;
    this.state = {
      filebrowserWidth,
      previewWidth
    };
  }
  render() {
    const { filebrowserWidth, previewWidth } = this.props.editor;
    return (
      <motion.div
        className={"editing-container"}
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
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
              window.dispatchEvent(new Event("resize"));
              this.props.changePreviewWidth(this.state.previewWidth);
            }}
          >
            <SplitterLayout
              vertical
              onSecondaryPaneSizeChange={(size: number) => {}}
              onDragEnd={() => {
                window.dispatchEvent(new Event("resize"));
              }}
            >
              <Monacoeditor />
            </SplitterLayout>
            <Previewpanel />
          </SplitterLayout>
        </SplitterLayout>
      </motion.div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  editor: state.editor
});

const connector = connect(mapStateToProps, {
  changeFilebrowserWidth,
  changePreviewWidth
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Editingpage);
