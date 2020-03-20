import React, { Component } from "react";
import Editingpage from "./components/Editingpage/Editingpage";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch />
        <Route
          path="/"
          exact
          component={() => (
            <div className={"container"}>
              {" "}
              <h1>Заглушечка</h1>{" "}
            </div>
          )}
        />
        <Route
          path="/editor"
          component={() => (
            <Editingpage filespanelsize={220} previewpanelsize={600} />
          )}
        />
        <Switch />
      </Router>
    );
  }
}

export default App;
