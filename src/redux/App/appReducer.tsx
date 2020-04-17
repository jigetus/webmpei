import { Action } from "redux";

const initialState = {
  isFilesLoaded: false
};

export interface IApp {
  isFilesLoaded: boolean;
}
export const appReducer = (state: IApp = initialState, action: Action) => {
  return state;
};
