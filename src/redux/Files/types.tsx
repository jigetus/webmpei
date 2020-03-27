export interface IFile {
  filename: string;
  filetype: string;
  isFolder: boolean;
  filedata: null | string;
  children: null | any;
}
export interface IFiles {
  files: Array<IFile>;
}

export const FETCH_FILES_PENDING = "FETCH_FILES_PENDING";
export const FETCH_FILES_SUCCESS = "FETCH_FILES_SUCCESS";
export const FETCH_FILES_ERROR = "FETCH_FILES_ERROR";

interface FETCH_FILES_PENDING {
  type: typeof FETCH_FILES_PENDING;
}

interface FETCH_FILES_SUCCESS {
  type: typeof FETCH_FILES_SUCCESS;
  payload: IFiles;
}

interface FETCH_FILES_ERROR {
  type: typeof FETCH_FILES_ERROR;
  error: string;
}

export type FilesActionsType =
  | FETCH_FILES_PENDING
  | FETCH_FILES_SUCCESS
  | FETCH_FILES_ERROR;
