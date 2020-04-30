export interface IFile {
  filename: string;
  filetype: string;
  isFolder: boolean;
  filedata: null | string;
  path: string;
  children: null | any;
}
export interface IFiles {
  files: Array<IFile>;
}

export const FETCH_FILES_PENDING = "FETCH_FILES_PENDING";
export const FETCH_FILES_SUCCESS = "FETCH_FILES_SUCCESS";
export const FETCH_FILES_ERROR = "FETCH_FILES_ERROR";
export const SAVE_OPEN_TABS = "SAVE_OPEN_TABS";

interface FETCH_FILES_PENDING {
  type: typeof FETCH_FILES_PENDING;
}

interface FETCH_FILES_SUCCESS {
  type: typeof FETCH_FILES_SUCCESS;
  payload: Array<IFile>;
}

interface FETCH_FILES_ERROR {
  type: typeof FETCH_FILES_ERROR;
  error: string;
}

interface SAVE_OPEN_TABS {
  type: typeof SAVE_OPEN_TABS;
  payload: any;
}
export type FilesActionsType =
  | FETCH_FILES_PENDING
  | FETCH_FILES_SUCCESS
  | FETCH_FILES_ERROR
  | SAVE_OPEN_TABS;
