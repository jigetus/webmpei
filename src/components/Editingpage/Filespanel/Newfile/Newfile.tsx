import React, { Component } from "react";
import Icon from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";
import { AppState } from "../../../../redux";
import { connect, ConnectedProps } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import theme from "../../../../utils/Colors";
import postData from "../../../../utils/functions";
import { toast } from "react-toastify";
import { fetchFilesSuccess } from "../../../../redux/Files/actions";

interface INewfilestate {
  dialog: boolean;
  fullfilename: string;
}

class Newfile extends Component<PropsFromRedux, INewfilestate> {
  state: Readonly<INewfilestate> = {
    dialog: false,
    fullfilename: ""
  };
  createfilehandler = () => {
    const { fullfilename } = this.state;
    const { activeProjectName, user, fetchFilesSuccess } = this.props;
    const login = user.login;
    if (fullfilename === "") return false;
    // @ts-ignore
    const filetype = /[^.]*$/.exec(fullfilename)[0].toLocaleLowerCase();
    const filename = fullfilename.substr(0, fullfilename.lastIndexOf("."));
    const request = {
      project: activeProjectName,
      filename,
      filetype,
      login
    };
    postData("api/createfile.php", request).then(res => {
      if (res.code === 400) {
        toast.error(res.data);
      }
      if (res.code === 200) {
        toast.info(res.data.message);
        fetchFilesSuccess(res.data.files);
        this.setState({ dialog: false });
      }
    });
  };
  render() {
    return (
      <>
        <Icon
          size={28}
          icon={ic_add}
          data-tip="Создать файл"
          onClick={() => this.setState({ dialog: true })}
        />{" "}
        <ThemeProvider theme={theme}>
          <Dialog
            open={this.state.dialog}
            onClose={() => this.setState({ dialog: false })}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title-file">
              {"Создание нового файла"}
            </DialogTitle>

            <DialogContent>
              <TextField
                id="newfilename"
                label="Имя файла"
                autoFocus={true}
                required={true}
                onChange={e => this.setState({ fullfilename: e.target.value })}
              />
              <Typography
                style={{ marginTop: 15, marginBottom: 5, color: "grey" }}
              >
                Введите имя файла вместе с<br />
                расширением (например, index.php).
                <br />
                Доступные расширения: .js .php .css .html
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => this.setState({ dialog: false })}
                color="primary"
              >
                Отмена
              </Button>

              <Button
                onClick={this.createfilehandler}
                color="primary"
                autoFocus
              >
                Создать
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  activeProjectName: state.editor.activeProjectName,
  user: state.app.user
});

const connector = connect(mapStateToProps, { fetchFilesSuccess });

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Newfile);
