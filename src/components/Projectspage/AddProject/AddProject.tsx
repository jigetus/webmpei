import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme2 from "../../../utils/Colors";
import Button from "@material-ui/core/Button";
import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography
} from "@material-ui/core";
import postData from "../../../utils/functions";
import { AppState } from "../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { fetchFilesSuccess } from "../../../redux/Files/actions";
import { toast } from "react-toastify";

interface IAddProjectState {
  createProjectmodal: boolean;
  addHTML: boolean;
  addCSS: boolean;
  addJS: boolean;
  addPHP: boolean;
  newprojectname: string;
}

class AddProject extends Component<PropsFromRedux> {
  state: Readonly<IAddProjectState> = {
    createProjectmodal: false,
    addHTML: false,
    addCSS: false,
    addJS: false,
    addPHP: false,
    newprojectname: ""
  };
  renderHTMLextracts = () => {
    const { addHTML, addCSS, addJS } = this.state;
    if (addHTML)
      return (
        <>
          <FormControlLabel
            checked={false}
            control={
              <Checkbox
                checked={addCSS}
                onChange={() => {
                  this.setState({ addCSS: !addCSS });
                }}
              />
            }
            label="CSS файл"
            className={"noselect"}
            style={{ marginLeft: "10px" }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={addJS}
                onChange={() => {
                  this.setState({ addJS: !addJS });
                }}
              />
            }
            label="Javascript файл"
            className={"noselect"}
            style={{ marginLeft: "10px" }}
          />
        </>
      );
    return null;
  };
  createProjecthandler = () => {
    const { addHTML, addCSS, addJS, addPHP, newprojectname } = this.state;
    if (newprojectname === "") return false;
    if (newprojectname.length > 20) {
      toast.error(
        "Имя проекта слишком большое. Максимальная длинна - 20 символов."
      );
      return false;
    }
    const request = {
      addHTML,
      addCSS,
      addJS,
      addPHP,
      newprojectname
    };
    postData("api/createproject.php", request).then(res => {
      if (res.code === 200) {
        this.props.fetchFilesSuccess(res.data.files);
        this.setState({ createProjectmodal: false });
        toast.info(res.data.message);
      }
      if (res.code === 400) {
        toast.error(res.data);
      }
    });
  };
  render() {
    const { addHTML, addPHP } = this.state;
    return (
      <div className="projectsbuttons">
        <ThemeProvider theme={theme2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.setState({ createProjectmodal: true })}
          >
            Новый проект
          </Button>
          <Dialog
            open={this.state.createProjectmodal}
            onClose={() => this.setState({ createProjectmodal: false })}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Создание нового проекта"}
            </DialogTitle>

            <DialogContent>
              <TextField
                id="newProjectname"
                label="Введите имя проекта"
                autoFocus={true}
                required={true}
                variant="outlined"
                onChange={e =>
                  this.setState({ newprojectname: e.target.value })
                }
              />
              <Typography style={{ marginTop: 15, marginBottom: 5 }}>
                Автосоздание файлов:
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={addHTML}
                      onChange={() => {
                        this.setState({
                          addHTML: !addHTML,
                          addCSS: false,
                          addJS: false,
                          addPHP: false
                        });
                      }}
                    />
                  }
                  label="HTML файл"
                  className={"noselect"}
                />
                {this.renderHTMLextracts()}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={addPHP}
                      onChange={() => {
                        this.setState({ addPHP: !addPHP, addHTML: false });
                      }}
                    />
                  }
                  label="PHP файл"
                  className={"noselect"}
                />
              </FormGroup>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => this.setState({ createProjectmodal: false })}
                color="primary"
              >
                Отмена
              </Button>

              <Button
                onClick={this.createProjecthandler}
                color="primary"
                autoFocus
              >
                Создать
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({});

const connector = connect(mapStateToProps, {
  fetchFilesSuccess
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(AddProject);
