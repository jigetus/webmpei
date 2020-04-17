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
  EditorActionTypes,
  IEditorState
} from "./types";
import { IFile } from "../Files/types";
import { editor } from "monaco-editor";

const initialState: IEditorState = {
  filebrowserWidth: 220,
  previewWidth: 350,
  activeProjectName: null,
  tabs: [],
  activetab: null,
  monaco: {}
};

export const editorReducer = (
  state = initialState,
  action: EditorActionTypes
): IEditorState => {
  const { type, payload } = action;
  // const monacoeditor: any = editor;
  switch (type) {
    case EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH:
      let checkfiles: number | null = null;
      // @ts-ignore
      if (payload < 150) checkfiles = 150;
      // @ts-ignore
      if (payload > 300) checkfiles = 300;
      return {
        ...state,
        filebrowserWidth: checkfiles === null ? payload : checkfiles
      } as IEditorState;
    case EDITINGPAGE_CHANGE_PREVIEW_WIDTH:
      return { ...state, previewWidth: payload } as IEditorState;
    case EDITINGPAGE_CHANGE_ACTIVE_PROJECT:
      return { ...state, activeProjectName: payload } as IEditorState;
    case EDITINGPAGE_ADD_TAB:
      // @ts-ignore
      const { path } = payload;
      const check = state.tabs.find(el => {
        return el.path === path;
      });

      if (check === undefined) {
        // @ts-ignore
        // const model = monacoeditor.createModel(payload.filedata, "javascript");
        // console.log(model);
        // // @ts-ignore
        // state.monaco.setModel(model);
        return { ...state, tabs: [...state.tabs, payload] } as IEditorState;
      } else {
        return { ...state };
      }

    case EDITINGPAGE_REMOVE_TAB:
      // @ts-ignore
      const activetabpath = state.activetab.path;
      const tmp: Array<IFile> = state.tabs.filter(function(el: IFile) {
        // @ts-ignore
        return el.path !== payload.path;
      });
      // @ts-ignore
      if (payload.path === activetabpath) {
        if (state.tabs.length === 0) {
          return { ...state, tabs: [], activetab: null };
        } else {
          return {
            ...state,
            tabs: tmp,
            activetab: tmp[tmp.length - 1]
          } as IEditorState;
        }
      } else {
        return { ...state, tabs: tmp } as IEditorState;
      }

    case EDITINGPAGE_CLEAR_TABS:
      return { ...state, tabs: [], activetab: null };
    case EDITINGPAGE_SET_TAB:
      return { ...state, activetab: payload } as IEditorState;
    case EDITINGPAGE_EDIT_TAB:
      let tmp1 = state.activetab;
      // @ts-ignore
      tmp1.filedata = payload;
      const tmp2 = state.tabs.map(item => {
        // @ts-ignore
        if (item.path === state.activetab.path) {
          // @ts-ignore
          item.filedata = payload;
        }
        return item;
      });
      // return { ...state, tabs: tmp2, activetab: tmp1 } as IEditorState;
      return { ...state, tabs: tmp2 } as IEditorState;

    case EDITINGPAGE_CREATE_EDITOR:
      // @ts-ignore
      // payload.setValue("neuzheli");
      return { ...state, monaco: payload } as IEditorState;
    default:
      return state;
  }
};
