import React, { Component } from "react";
import Editingpage from "./components/Editingpage/Editingpage";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppState } from "./redux";
import { connect, ConnectedProps } from "react-redux";
import { fetchFilesSuccess } from "./redux/Files/actions";
import Projectspage from "./components/Projectspage/Projectspage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-contexify/dist/ReactContexify.min.css";
import Loginpage from "./components/Loginpage/Loginpage";
import MyLoader from "./components/Utility/Loader";
import { SetUserInfo, UserLogged } from "./redux/App/actions";
import {
  changeFilebrowserWidth,
  changePreviewWidth
} from "./redux/Editor/actions";

interface IAppState {
  isDataLoaded: boolean;
}
class App extends Component<PropsFromRedux, IAppState> {
  state: Readonly<IAppState> = {
    isDataLoaded: false
  };
  componentDidMount(): void {
    const { UserLogged, fetchFilesSuccess, SetUserInfo } = this.props;
    this.setState({ isDataLoaded: false });
    fetch("api/checklogin.php")
      .then(res => res.json())
      .then(res => {
        if (res.code === 400) {
          this.setState({ isDataLoaded: true });
        }
        if (res.code === 200) {
          fetchFilesSuccess(res.data.files);
          SetUserInfo(res.data.user_info);
          UserLogged();
          this.setState({ isDataLoaded: true });
          if (localStorage["filebrowserWidth"] !== undefined) {
            this.props.changeFilebrowserWidth(
              parseInt(localStorage["filebrowserWidth"])
            );
          }
          if (localStorage["previewWidth"] !== undefined) {
            this.props.changePreviewWidth(
              parseInt(localStorage["previewWidth"])
            );
          }
        }
      })
      .catch(error => {});
  }

  render() {
    const { isDataLoaded } = this.state;
    const { isLogged } = this.props;
    if (!isDataLoaded) {
      return <MyLoader />;
    }
    if (!isLogged) {
      return <Loginpage />;
    }
    if (isDataLoaded) {
      return (
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Projectspage />} />
            <Route path="/editor" component={() => <Editingpage />} />
          </Switch>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastClassName="dark-toast"
          />
        </Router>
      );
    }
  }
}

const mapStateToProps = (state: AppState) => ({ isLogged: state.app.isLogged });

const connector = connect(mapStateToProps, {
  fetchFilesSuccess,
  UserLogged,
  SetUserInfo,
  changeFilebrowserWidth,
  changePreviewWidth
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(App);
