import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import theme from "../../../../utils/Colors";
import { ThemeProvider } from "@material-ui/core";
import ReactTooltip from "react-tooltip";

class Controls extends Component {
  render() {
    return (
      <div className={"controls"}>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            data-tip="Сохранить все вкладки"
          >
            Сохранить
          </Button>
        </ThemeProvider>
        <ReactTooltip effect={"solid"} place={"bottom"} />
      </div>
    );
  }
}

export default Controls;
