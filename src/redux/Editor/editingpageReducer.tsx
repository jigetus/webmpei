import { Action } from "redux";
import {
  EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH,
  EDITINGPAGE_CHANGE_PREVIEW_WIDTH,
  EditorActionTypes,
  IEditorState
} from "./types";

const initialState: IEditorState = {
  filebrowserWidth: 220,
  previewWidth: 600
};

export const editorReducer = (
  state = initialState,
  action: EditorActionTypes
): IEditorState => {
  const { type, payload } = action;
  switch (type) {
    case EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH:
      return { ...state, filebrowserWidth: payload };
    case EDITINGPAGE_CHANGE_PREVIEW_WIDTH:
      return { ...state, previewWidth: payload };

    default:
      return state;
  }
};
