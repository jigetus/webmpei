import { IFilesState } from "./actions";
import {
  FETCH_FILES_ERROR,
  FETCH_FILES_PENDING,
  FETCH_FILES_SUCCESS,
  FilesActionsType,
  IFile,
  SAVE_OPEN_TABS
} from "./types";
import { ITab } from "../Editor/types";

const initialState: IFilesState = {
  pending: false,
  files: [],
  error: ""
};

export function filesReducer(
  state = initialState,
  action: FilesActionsType
): IFilesState {
  switch (action.type) {
    case FETCH_FILES_PENDING:
      return {
        ...state,
        pending: true
      };

    case FETCH_FILES_SUCCESS:
      return {
        ...state,
        pending: false,
        files: action.payload
      };

    case FETCH_FILES_ERROR:
      alert(action.error);
      return {
        ...state,
        pending: false,
        error: action.error
      };

    case SAVE_OPEN_TABS:
      const activeprojectname = action.payload.activeprojectname;
      let activeFiles: Array<IFile> = [];
      state.files.map((item: IFile) => {
        if (item.filename === activeprojectname) {
          activeFiles = item.children;
        }
        return null;
      });
      action.payload.tabs.map(function(item: ITab) {
        let tmp = item.file.path;
        activeFiles.map((file: IFile) => {
          if (file.path === tmp) {
            // @ts-ignore
            file.filedata = item.model.getValue();
          }
          return file;
        });
        return item;
      });
      const tmp2 = state.files.map((item: IFile) => {
        if (item.filename === activeprojectname) {
          item.children = activeFiles;
        }
        return item;
      });
      return { ...state, files: tmp2 };

    default:
      return state;
  }
}
