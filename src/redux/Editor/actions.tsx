import {
  EDITINGPAGE_ADD_TAB,
  EDITINGPAGE_CHANGE_ACTIVE_PROJECT,
  EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH,
  EDITINGPAGE_CHANGE_PREVIEW_WIDTH,
  EDITINGPAGE_CLEAR_TABS,
  EDITINGPAGE_CREATE_EDITOR,
  EDITINGPAGE_EDIT_TAB,
  EDITINGPAGE_REMOVE_TAB,
  EDITINGPAGE_SET_TAB,
  EditorActionTypes
} from "./types";
import { IFile } from "../Files/types";
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

export function AddTab(file: IFile): EditorActionTypes {
  return {
    type: EDITINGPAGE_ADD_TAB,
    payload: file
  };
}

export function RemoveTab(file: IFile): EditorActionTypes {
  return {
    type: EDITINGPAGE_REMOVE_TAB,
    payload: file
  };
}
export function ClearTabs(): EditorActionTypes {
  return {
    type: EDITINGPAGE_CLEAR_TABS,
    payload: null
  };
}

export function SetTab(file: IFile): EditorActionTypes {
  return {
    type: EDITINGPAGE_SET_TAB,
    payload: file
  };
}

export function EditTab(string: string): EditorActionTypes {
  return {
    type: EDITINGPAGE_EDIT_TAB,
    payload: string
  };
}

export function CreateEditor(editor: IStandaloneCodeEditor) {
  return {
    type: EDITINGPAGE_CREATE_EDITOR,
    payload: editor
  };
}
