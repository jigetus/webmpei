import {
  FETCH_FILES_ERROR,
  FETCH_FILES_PENDING,
  FETCH_FILES_SUCCESS,
  FilesActionsType,
  IFile,
  SAVE_OPEN_TABS
} from "./types";
import { ITab } from "../Editor/types";

export interface IFilesState {
  pending: boolean;
  files: Array<IFile>;
  error: string;
}
export function fetchFilesPending(): FilesActionsType {
  return {
    type: FETCH_FILES_PENDING
  };
}

export function fetchFilesSuccess(files: Array<IFile>): FilesActionsType {
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

export function SaveTabs(
  tabs: Array<ITab>,
  activeprojectname: string
): FilesActionsType {
  return {
    type: SAVE_OPEN_TABS,
    payload: { tabs, activeprojectname }
  };
}
