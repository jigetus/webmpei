import { IFile } from "../Files/types";
import IStandaloneCodeEditor from "react-monaco-editor/src";
import ICodeEditorViewState from "react-monaco-editor/src";
import ITextModel from "react-monaco-editor/src";
export const EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH =
  "EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH";
export const EDITINGPAGE_CHANGE_PREVIEW_WIDTH =
  "EDITINGPAGE_CHANGE_PREVIEW_WIDTH";
export const EDITINGPAGE_CHANGE_ACTIVE_PROJECT =
  "EDITINGPAGE_CHANGE_ACTIVE_PROJECT";
export const EDITINGPAGE_ADD_TAB = "EDITINGPAGE_ADD_TAB";
export const EDITINGPAGE_REMOVE_TAB = "EDITINGPAGE_REMOVE_TAB";
export const EDITINGPAGE_CLEAR_TABS = "EDITINGPAGE_CLEAR_TABS";
export const EDITINGPAGE_SET_TAB = "EDITINGPAGE_SET_TAB";
export const EDITINGPAGE_CREATE_EDITOR = "EDITINGPAGE_CREATE_EDITOR";
export const EDITINGPAGE_SET_PREVIEW_VISIBLE =
  "EDITINGPAGE_SET_PREVIEW_VISIBLE";
export const EDITINGPAGE_SET_PREVIEW_RESIZE = "EDITINGPAGE_SET_PREVIEW_RESIZE";
export const EDITINGPAGE_SET_PREVIEW_PATH = "EDITINGPAGE_SET_PREVIEW_PATH";
export const EDITINGPAGE_RESTORE_ACTIVE_TAB = "EDITINGPAGE_RESTORE_ACTIVE_TAB";

export interface ITab {
  file: IFile;
  model: ITextModel;
  viewstate: null | ICodeEditorViewState;
  isActive: boolean;
}

export interface IEditorState {
  filebrowserWidth: number;
  previewWidth: number;
  activeProjectName: string | null;
  tabs: Array<ITab>;
  monaco: IStandaloneCodeEditor | {};
  preview_visible: boolean;
  preview_resize: boolean;
  preview_path: string | null;
}
interface ChangeFileBrowserWidth {
  type: typeof EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH;
  payload: number;
}

interface ChangePreviewWidth {
  type: typeof EDITINGPAGE_CHANGE_PREVIEW_WIDTH;
  payload: number;
}

interface ChangeActiveProject {
  type: typeof EDITINGPAGE_CHANGE_ACTIVE_PROJECT;
  payload: string;
}

interface AddTab {
  type: typeof EDITINGPAGE_ADD_TAB;
  payload: ITab;
}
interface RemoveTab {
  type: typeof EDITINGPAGE_REMOVE_TAB;
  payload: string;
}
interface ClearTabs {
  type: typeof EDITINGPAGE_CLEAR_TABS;
  payload: null;
}
interface SetTab {
  type: typeof EDITINGPAGE_SET_TAB;
  payload: string;
}

interface CreateEditor {
  type: typeof EDITINGPAGE_CREATE_EDITOR;
  payload: IStandaloneCodeEditor;
}

interface SetPreviewVisible {
  type: typeof EDITINGPAGE_SET_PREVIEW_VISIBLE;
  payload: boolean;
}
interface SetPreviewResize {
  type: typeof EDITINGPAGE_SET_PREVIEW_RESIZE;
  payload: boolean;
}
interface SetPreviewPath {
  type: typeof EDITINGPAGE_SET_PREVIEW_PATH;
  payload: string | null;
}
interface RestoreActiveTab {
  type: typeof EDITINGPAGE_RESTORE_ACTIVE_TAB;
  payload: null;
}

export type EditorActionTypes =
  | ChangeFileBrowserWidth
  | ChangePreviewWidth
  | ChangeActiveProject
  | AddTab
  | RemoveTab
  | ClearTabs
  | SetTab
  | CreateEditor
  | SetPreviewVisible
  | SetPreviewResize
  | SetPreviewPath
  | RestoreActiveTab;
