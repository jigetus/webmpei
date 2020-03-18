import React, { Component } from "react";
import Editingpage from "./components/Editingpage/Editingpage";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch />
        <Route path="/" exact>
          <h1>Заглушечка</h1>
        </Route>
        <Route path="/editor">
          <Editingpage />
        </Route>
        <Switch />
      </Router>
    );
  }
}

export default App;
