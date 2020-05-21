import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  ThemeProvider
} from "@material-ui/core";
import theme2 from "../../../utils/Colors";
import Icon from "react-icons-kit";
import { user } from "react-icons-kit/fa/user";
import Button from "@material-ui/core/Button";
import { AppState } from "../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { toast } from "react-toastify";
import postData from "../../../utils/functions";

interface IUserState {
  passwordmodal: boolean;
  oldpassword: string;
  newpassword: string;
  repeatpassword: string;
}

class User extends Component<PropsFromRedux, IUserState> {
  state: Readonly<IUserState> = {
    passwordmodal: false,
    newpassword: "",
    repeatpassword: "",
    oldpassword: ""
  };

  submitHandler = () => {
    const { newpassword, repeatpassword, oldpassword } = this.state;
    if (newpassword === "" || repeatpassword === "" || oldpassword === "") {
      toast.error("Заполните все поля");
      return false;
    }
    if (repeatpassword === newpassword) {
      const request = {
        oldpassword,
        newpassword
      };
      postData("api/changeuserpassword.php", request).then((res: any) => {
        if (res.code === 200) {
          toast.info(res.data.message);
          this.setState({ passwordmodal: false });
        }
        if (res.code === 400) {
          toast.error(res.data);
        }
      });
    }
  };
  render() {
    const { name, last_name, middle_name } = this.props.user;
    return (
      <>
        <ThemeProvider theme={theme2}>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {popupState => (
              <>
                <a {...bindTrigger(popupState)}>
                  <Icon icon={user} size={32} />
                  {last_name} {name[0]}.
                  {middle_name.length !== 0 ? middle_name[0] + "." : ""}
                </a>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                >
                  <Box p={2}>
                    <Button
                      color="secondary"
                      onClick={event => {
                        this.setState({ passwordmodal: true });
                      }}
                    >
                      Сменить пароль
                    </Button>
                    <br />
                    <Button
                      color="secondary"
                      onClick={event => {
                        fetch("api/abortses.php");
                        window.location.reload();
                      }}
                    >
                      Выйти
                    </Button>
                  </Box>
                </Popover>
              </>
            )}
          </PopupState>
          <Dialog
            open={this.state.passwordmodal}
            onClose={() => this.setState({ passwordmodal: false })}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Смена пароля"}</DialogTitle>

            <DialogContent>
              <Container style={{ width: "300px" }}>
                <TextField
                  id="oldpassword"
                  label="Введите старый пароль"
                  autoFocus={true}
                  autoComplete="off"
                  required={true}
                  type={"password"}
                  onChange={e => this.setState({ oldpassword: e.target.value })}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="newpassword"
                  label="Введите новый пароль"
                  autoFocus={true}
                  required={true}
                  type={"password"}
                  autoComplete="off"
                  onChange={e => this.setState({ newpassword: e.target.value })}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="repeatpassword"
                  error={this.state.newpassword !== this.state.repeatpassword}
                  label="Повторите новый пароль"
                  autoFocus={true}
                  required={true}
                  type={"password"}
                  autoComplete="off"
                  variant="outlined"
                  helperText={
                    this.state.newpassword !== this.state.repeatpassword
                      ? "Введеные пароли не совпадают"
                      : ""
                  }
                  onChange={e =>
                    this.setState({ repeatpassword: e.target.value })
                  }
                  margin="normal"
                  fullWidth
                />
              </Container>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => this.setState({ passwordmodal: false })}
                color="primary"
              >
                Отмена
              </Button>

              <Button onClick={this.submitHandler} color="primary" autoFocus>
                Применить
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({ user: state.app.user });

const connector = connect(mapStateToProps, {});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(User);
