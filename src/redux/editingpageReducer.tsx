import { Action } from "redux";
import {
  EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH,
  EDITINGPAGE_CHANGE_PREVIEW_WIDTH,
  EditingPageTypes
} from "./types";

const initialState = {
  filebrowserWidth: 220,
  previewWidth: 600
};

export interface IEditor {
  filebrowserWidth: number;
  previewWidth: number;
}
export const editingpageReducer = (
  state: IEditor = initialState,
  action: EditingPageTypes
) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH:
      return { ...state, filebrowserWidth: payload };
    case EDITINGPAGE_CHANGE_PREVIEW_WIDTH:
      return { ...state, previewWidth: payload };

    default:
      return state;
  }
};
