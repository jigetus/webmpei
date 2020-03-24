import React, { Component } from "react";
import FilesBrowser from "./Filespanel/FilesBrowser";
import Previewpanel from "./Previewpanel/Previewpanel";
import SplitterLayout from "react-splitter-layout";
import { connect, ConnectedProps } from "react-redux";
import "react-splitter-layout/lib/index.css";
import { motion } from "framer-motion";
import pageTransition from "../../utils/Routeanimation";
import Monacoeditor from "./Monacoeditor/Monacoeditor";
import { IRootState } from "../../redux/rootReducer";
import {
  changeFilebrowserWidth,
  changePreviewWidth
} from "../../redux/actions";

const mapState = (state: IRootState) => {
  return {
    editor: state.editor
  };
};

const mapDispatch = () => ({
  first: changeFilebrowserWidth,
  second: changePreviewWidth
});
const connector = connect(mapState, mapDispatch);

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

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
          secondaryMinSize={200}
          primaryMinSize={1400}
          onSecondaryPaneSizeChange={(size: number) => {
            this.setState({ filebrowserWidth: size });
          }}
          onDragEnd={() => {
            window.dispatchEvent(new Event("resize"));
            this.props.first(this.state.filebrowserWidth);
          }}
        >
          <FilesBrowser />
          <SplitterLayout
            secondaryInitialSize={previewWidth}
            primaryMinSize={600}
            secondaryMinSize={50}
            onSecondaryPaneSizeChange={(size: number) => {}}
            onDragEnd={() => {
              window.dispatchEvent(new Event("resize"));
            }}
          >
            <SplitterLayout
              vertical
              secondaryMinSize={600}
              onSecondaryPaneSizeChange={(size: number) => {}}
              onDragEnd={() => {
                window.dispatchEvent(new Event("resize"));
              }}
            >
              {/*<Editorpanel />*/}
              <Monacoeditor />
            </SplitterLayout>
            <Previewpanel />
          </SplitterLayout>
        </SplitterLayout>
      </motion.div>
    );
  }
}

export default connector(Editingpage);
