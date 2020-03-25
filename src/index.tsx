import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./css/Global.css";
import { Provider } from "react-redux";
import configureStore from "./redux";

const store = configureStore();

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
