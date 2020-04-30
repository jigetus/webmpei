import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import theme from "../../../../utils/Colors";
import { ThemeProvider } from "@material-ui/core";
import ReactTooltip from "react-tooltip";
import { AppState } from "../../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { SaveTabs } from "../../../../redux/Files/actions";

class Controls extends Component<PropsFromRedux> {
  render() {
    const { SaveTabs, activeProjectName, tabs } = this.props;
    return (
      <div className={"controls"}>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            data-tip="Сохранить все вкладки"
            onClick={() => {
              SaveTabs(tabs, activeProjectName);
            }}
          >
            Сохранить
          </Button>
        </ThemeProvider>
        <ReactTooltip effect={"solid"} place={"bottom"} />
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  tabs: state.editor.tabs,
  activeProjectName: state.editor.activeProjectName
});

const connector = connect(mapStateToProps, { SaveTabs });

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Controls);
