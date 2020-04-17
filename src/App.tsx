import React, { Component } from "react";
import Editingpage from "./components/Editingpage/Editingpage";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppState } from "./redux";
import { connect, ConnectedProps } from "react-redux";
import {
  fetchFilesError,
  fetchFilesPending,
  fetchFilesSuccess
} from "./redux/Files/actions";
import Projectspage from "./components/Projectspage/Projectspage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

interface IAppState {
  isDataLoaded: boolean;
}
class App extends Component<PropsFromRedux, IAppState> {
  state: Readonly<IAppState> = {
    isDataLoaded: false
  };
  componentDidMount(): void {
    this.setState({ isDataLoaded: false });
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
        this.setState({ isDataLoaded: true });
        return res;
      })
      .catch(error => {
        fetchFilesError(error);
      });
  }

  render() {
    const { isDataLoaded } = this.state;
    if (isDataLoaded) {
      return (
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Projectspage />} />
            <Route path="/editor" component={() => <Editingpage />} />
          </Switch>
        </Router>
      );
    }
    return (
      <div className={"loadercontainer"}>
        <Loader type="Triangle" color="#e2022e" height={250} width={250} />
        Загрузка...
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({});

const connector = connect(mapStateToProps, {
  fetchFilesPending,
  fetchFilesError,
  fetchFilesSuccess
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(App);
