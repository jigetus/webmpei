import React, { Component, SyntheticEvent } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import MyLoader from "../Utility/Loader";
import { ThemeProvider } from "@material-ui/core/styles";
import theme2 from "../../utils/Colors";
import postData from "../../utils/functions";
import { toast, ToastContainer } from "react-toastify";
import MyError from "../Utility/Error";
import { AppState } from "../../redux";
import { connect, ConnectedProps } from "react-redux";
import { fetchFilesSuccess } from "../../redux/Files/actions";
import { SetUserInfo, UserLogged } from "../../redux/App/actions";

interface IGroup {
  group_id: number;
  group_name: string;
}

interface ILoginState {
  login: string;
  password: string;
  groupid: number;
  isLoaded: boolean;
  groups: Array<IGroup>;
  error: boolean;
  errortext: string;
}
class Loginpage extends Component<PropsFromRedux> {
  state: Readonly<ILoginState> = {
    login: "",
    password: "",
    groupid: 1,
    isLoaded: false,
    groups: [],
    error: false,
    errortext: ""
  };
  submit(event: SyntheticEvent) {
    const { fetchFilesSuccess, UserLogged, SetUserInfo } = this.props;
    event.preventDefault();
    const { login, password, groupid } = this.state;
    if (login.length !== 0 && password.length !== 0 && groupid !== 0) {
      const request = {
        login,
        password,
        groupid
      };
      postData("/api/loginform.php", request).then(res => {
        if (res.code === 400) toast.error(res.data.error_text);
        if (res.code === 200) {
          toast.info("Вы вошли!");
          fetchFilesSuccess(res.data.files);
          SetUserInfo(res.data.user_info);
          UserLogged();
        }
      });
    }
  }

  componentDidMount(): void {
    fetch("api/getgroups.php")
      .then(res => res.json())
      .then(res => {
        if (res.code === 200) {
          this.setState({ isLoaded: true, groups: res.data });
        }
        if (res.code === 400) {
          this.setState({
            error: true,
            isLoaded: true,
            errortext: res.data.error
          });
        }
      });
  }

  render() {
    const { isLoaded, groups, groupid, error, errortext } = this.state;
    if (!isLoaded) return <MyLoader />;
    if (error) return <MyError errormessage={errortext} />;
    return (
      <ThemeProvider theme={theme2}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            marginTop: "100px"
          }}
        >
          <CssBaseline />
          <div>
            <Typography
              component="h1"
              variant="h4"
              style={{ margin: "20px 0" }}
            >
              WEBmpei - Авторизация
            </Typography>
            <form noValidate onSubmit={event => this.submit(event)}>
              <InputLabel id="groups_label">Группа*</InputLabel>
              <Select
                labelId="groups_label"
                id="groups"
                fullWidth
                variant="outlined"
                value={groupid}
                autoFocus
                onChange={event =>
                  this.setState({ groupid: event.target.value })
                }
              >
                {groups.map(item => (
                  <MenuItem value={item.group_id} key={item.group_id}>
                    {item.group_name}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="login"
                label="Логин"
                name="login"
                autoComplete="login"
                autoFocus
                onChange={event => this.setState({ login: event.target.value })}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "20px 0" }}
              >
                Авторизация
              </Button>
              <Typography component="span" className={"mt5"}>
                Если вы не знаете ваш логин и пароль, обратитесь к
                преподавателю.
              </Typography>
            </form>
          </div>
        </Container>
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
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: AppState) => ({ isLogged: state.app.isLogged });

const connector = connect(mapStateToProps, {
  fetchFilesSuccess,
  UserLogged,
  SetUserInfo
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Loginpage);
