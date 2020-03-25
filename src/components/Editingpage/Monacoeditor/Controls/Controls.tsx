import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import theme from "../../../../utils/Colors";
import { ThemeProvider } from "@material-ui/core";

class Controls extends Component {
  render() {
    return (
      <div className={"controls"}>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
            Сохранить
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}

export default Controls;
