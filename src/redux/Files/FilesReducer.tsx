import { IFilesState } from "./actions";
import {
  FETCH_FILES_ERROR,
  FETCH_FILES_PENDING,
  FETCH_FILES_SUCCESS,
  FilesActionsType
} from "./types";

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
    default:
      return state;
  }
}
