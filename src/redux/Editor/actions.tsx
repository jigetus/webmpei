import {
  EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH,
  EDITINGPAGE_CHANGE_PREVIEW_WIDTH,
  EditorActionTypes
} from "./types";

export function changeFilebrowserWidth(newwidth: number): EditorActionTypes {
  return {
    type: EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH,
    payload: newwidth
  };
}

export function changePreviewWidth(newwidth: number): EditorActionTypes {
  return {
    type: EDITINGPAGE_CHANGE_PREVIEW_WIDTH,
    payload: newwidth
  };
}
