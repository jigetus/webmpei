import {
  EDITINGPAGE_ADD_TAB,
  EDITINGPAGE_CHANGE_ACTIVE_PROJECT,
  EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH,
  EDITINGPAGE_CHANGE_PREVIEW_WIDTH,
  EDITINGPAGE_CLEAR_TABS,
  EDITINGPAGE_CREATE_EDITOR,
  EDITINGPAGE_REMOVE_TAB,
  EDITINGPAGE_RESTORE_ACTIVE_TAB,
  EDITINGPAGE_SET_PREVIEW_PATH,
  EDITINGPAGE_SET_PREVIEW_RESIZE,
  EDITINGPAGE_SET_PREVIEW_VISIBLE,
  EDITINGPAGE_SET_TAB,
  EditorActionTypes,
  ITab
} from "./types";
import IStandaloneCodeEditor from "react-monaco-editor/src";

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

export function changeActiveProject(projectname: string): EditorActionTypes {
  return {
    type: EDITINGPAGE_CHANGE_ACTIVE_PROJECT,
    payload: projectname
  };
}

export function AddTab(tab: ITab): EditorActionTypes {
  return {
    type: EDITINGPAGE_ADD_TAB,
    payload: tab
  };
}

export function RemoveTab(path: string): EditorActionTypes {
  return {
    type: EDITINGPAGE_REMOVE_TAB,
    payload: path
  };
}
export function ClearTabs(): EditorActionTypes {
  return {
    type: EDITINGPAGE_CLEAR_TABS,
    payload: null
  };
}

export function SetTab(path: string): EditorActionTypes {
  return {
    type: EDITINGPAGE_SET_TAB,
    payload: path
  };
}

export function CreateEditor(editor: IStandaloneCodeEditor): EditorActionTypes {
  return {
    type: EDITINGPAGE_CREATE_EDITOR,
    payload: editor
  };
}

export function SetPreviewVisible(bol: boolean): EditorActionTypes {
  return {
    type: EDITINGPAGE_SET_PREVIEW_VISIBLE,
    payload: bol
  };
}

export function SetPreviewResize(bol: boolean): EditorActionTypes {
  return {
    type: EDITINGPAGE_SET_PREVIEW_RESIZE,
    payload: bol
  };
}
export function SetPreviewPath(val: string | null): EditorActionTypes {
  return {
    type: EDITINGPAGE_SET_PREVIEW_PATH,
    payload: val
  };
}

export function RestoreActiveTab(): EditorActionTypes {
  return {
    type: EDITINGPAGE_RESTORE_ACTIVE_TAB,
    payload: null
  };
}
