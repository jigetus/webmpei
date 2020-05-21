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
  IEditorState,
  ITab
} from "./types";
import { IFile } from "../Files/types";

const initialState: IEditorState = {
  filebrowserWidth: 220,
  previewWidth: 350,
  activeProjectName: null,
  tabs: [],
  monaco: {},
  preview_visible: true,
  preview_resize: false,
  preview_path: null
};

export const editorReducer = (
  state = initialState,
  action: EditorActionTypes
): IEditorState => {
  const { type, payload } = action;
  switch (type) {
    case EDITINGPAGE_CHANGE_FILEBROWSER_WIDTH:
      localStorage["filebrowserWidth"] = payload;
      return {
        ...state,
        filebrowserWidth: payload
      } as IEditorState;

    case EDITINGPAGE_CHANGE_PREVIEW_WIDTH:
      localStorage["previewWidth"] = payload;
      return { ...state, previewWidth: payload } as IEditorState;

    case EDITINGPAGE_CHANGE_ACTIVE_PROJECT:
      return { ...state, activeProjectName: payload } as IEditorState;

    case EDITINGPAGE_ADD_TAB:
      // @ts-ignore
      const { path } = payload.file;
      const check = state.tabs.find(el => {
        return el.file.path === path;
      });

      if (check === undefined) {
        return {
          ...state,
          tabs: [...state.tabs, payload]
        } as IEditorState;
      } else {
        return { ...state };
      }

    case EDITINGPAGE_REMOVE_TAB:
      // @ts-ignore ищем активную вкладку
      let activetabpath = "";
      state.tabs.map((item: ITab) =>
        item.isActive ? (activetabpath = item.file.path) : null
      );
      // @ts-ignore удаляем
      const tmp: Array<ITab> = state.tabs.filter(function(el: IFile) {
        // @ts-ignore
        return el.file.path !== payload;
      });
      // @ts-ignore
      if (payload === activetabpath) {
        if (tmp.length === 0) {
          // @ts-ignore
          state.monaco.setModel(null);
          return { ...state, tabs: [] };
        } else {
          let tmpQ = tmp;
          tmpQ[tmpQ.length - 1].isActive = true;
          // @ts-ignore
          state.monaco.setModel(tmpQ[tmpQ.length - 1].model);
          return {
            ...state,
            tabs: tmpQ
          } as IEditorState;
        }
      } else {
        return { ...state, tabs: tmp } as IEditorState;
      }

    case EDITINGPAGE_CLEAR_TABS:
      return { ...state, tabs: [], preview_path: null };

    case EDITINGPAGE_SET_TAB:
      // @ts-ignore
      const savecurrent: Array<ITab> = state.tabs.map((item: ITab) => {
        if (item.isActive) {
          // @ts-ignore
          item.model = state.monaco.getModel();
          // @ts-ignore
          item.viewstate = state.monaco.saveViewState();
        }
        return item;
      });
      const newtabs: Array<ITab> = savecurrent.map((item: ITab) => {
        item.isActive = item.file.path === payload;
        if (item.isActive) {
          // @ts-ignore
          state.monaco.setModel(item.model);
          // @ts-ignore
          state.monaco.restoreViewState(item.viewstate);
        }
        return item;
      });
      // @ts-ignore
      state.monaco.focus();
      return { ...state, tabs: newtabs } as IEditorState;

    case EDITINGPAGE_CREATE_EDITOR:
      return { ...state, monaco: payload } as IEditorState;
    case EDITINGPAGE_SET_PREVIEW_VISIBLE:
      return { ...state, preview_visible: payload } as IEditorState;
    case EDITINGPAGE_SET_PREVIEW_RESIZE:
      return { ...state, preview_resize: payload } as IEditorState;
    case EDITINGPAGE_SET_PREVIEW_PATH:
      return { ...state, preview_path: payload } as IEditorState;
    case EDITINGPAGE_RESTORE_ACTIVE_TAB:
      state.tabs.map((item: ITab) => {
        if (item.isActive) {
          // @ts-ignore
          state.monaco.setModel(item.model);
          // @ts-ignore
          state.monaco.restoreViewState(item.viewstate);
        }
        return item;
      });
      // @ts-ignore
      state.monaco.focus();
      return { ...state };

    default:
      return state;
  }
};
