import { combineReducers } from "redux";
import { appReducer, IApp } from "./appReducer";
import { editingpageReducer, IEditor } from "./editingpageReducer";

export interface IRootState {
  app: IApp;
  editor: IEditor;
}

export const rootReducer = combineReducers({
  app: appReducer,
  editor: editingpageReducer
});
