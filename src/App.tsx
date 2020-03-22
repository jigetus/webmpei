import React, { Component } from "react";
import Editingpage from "./components/Editingpage/Editingpage";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import pageTransition from "./utils/Routeanimation";
class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <AnimatePresence>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <motion.div
                  className={"container"}
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={pageTransition}
                >
                  <h1>Заглушечка</h1>
                </motion.div>
              )}
            />
            <Route
              path="/editor"
              component={() => (
                <Editingpage filespanelsize={220} previewpanelsize={600} />
              )}
            />
          </Switch>
        </AnimatePresence>
      </Router>
    );
  }
}

export default App;
