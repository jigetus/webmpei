import { applyMiddleware, combineReducers, createStore } from "redux";
import { appReducer } from "./App/appReducer";
import { editorReducer } from "./Editor/editingpageReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { filesReducer } from "./Files/FilesReducer";

const rootReducer = combineReducers({
  app: appReducer,
  editor: editorReducer,
  files: filesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
}
