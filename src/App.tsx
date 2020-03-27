import React, { Component } from "react";
import Editingpage from "./components/Editingpage/Editingpage";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import pageTransition from "./utils/Routeanimation";
import { AppState } from "./redux";
import { connect, ConnectedProps } from "react-redux";
import {
  fetchFilesError,
  fetchFilesPending,
  fetchFilesSuccess
} from "./redux/Files/actions";

interface IAppState {
  isDataLoaded: boolean;
}
class App extends Component<PropsFromRedux, IAppState> {
  componentDidMount(): void {
    const {
      fetchFilesError,
      fetchFilesPending,
      fetchFilesSuccess
    } = this.props;
    fetchFilesPending();
    fetch("/userfiles.json")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        fetchFilesSuccess(res);
        return res;
      })
      .catch(error => {
        fetchFilesError(error);
      });
  }

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
            <Route path="/editor" component={() => <Editingpage />} />
          </Switch>
        </AnimatePresence>
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  state
});

const connector = connect(mapStateToProps, {
  fetchFilesPending,
  fetchFilesError,
  fetchFilesSuccess
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(App);
