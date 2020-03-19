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
         <Route path="/" exact component={()=><h1>Заглушечка</h1>} />
         <Route path="/editor" component={()=><Editingpage />} />
        <Switch />
      </Router>
    );
  }
}

export default App;
