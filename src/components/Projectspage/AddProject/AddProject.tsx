import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme2 from "../../../utils/Colors";
import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";

interface IAddProjectState {
  createProjectmodal: boolean;
}

class AddProject extends Component {
  state: Readonly<IAddProjectState> = {
    createProjectmodal: false
  };
  render() {
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
              <TextField id="newProjectname" label="Введите имя проекта" />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => this.setState({ createProjectmodal: false })}
                color="primary"
              >
                Отмена
              </Button>
              <Button
                onClick={() => this.setState({ createProjectmodal: false })}
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

export default AddProject;
