import {
  EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH,
  EDITINGPAGE_CHANGE_PREVIEW_WIDTH,
  EditingPageTypes
} from "./types";

export function changeFilebrowserWidth(newwidth: number): EditingPageTypes {
  return {
    type: EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH,
    payload: newwidth
  };
}

export function changePreviewWidth(newwidth: number): EditingPageTypes {
  return {
    type: EDITINGPAGE_CHANGE_PREVIEW_WIDTH,
    payload: newwidth
  };
}
