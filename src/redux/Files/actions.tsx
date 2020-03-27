import {
  FETCH_FILES_ERROR,
  FETCH_FILES_PENDING,
  FETCH_FILES_SUCCESS,
  FilesActionsType,
  IFiles
} from "./types";

export interface IFilesState {
  pending: boolean;
  files: IFiles | [];
  error: string;
}
export function fetchFilesPending(): FilesActionsType {
  return {
    type: FETCH_FILES_PENDING
  };
}

export function fetchFilesSuccess(files: IFiles): FilesActionsType {
  return {
    type: FETCH_FILES_SUCCESS,
    payload: files
  };
}

export function fetchFilesError(error: Error): FilesActionsType {
  return {
    type: FETCH_FILES_ERROR,
    error: error.message
  };
}
