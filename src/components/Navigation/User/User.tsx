import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import { ThemeProvider } from "@material-ui/core";
import theme2 from "../../../utils/Colors";
import Icon from "react-icons-kit";
import { user } from "react-icons-kit/fa/user";
import Button from "@material-ui/core/Button";
import { AppState } from "../../../redux";
import { connect, ConnectedProps } from "react-redux";

class User extends Component<PropsFromRedux> {
  render() {
    const { name, last_name } = this.props.user;
    return (
      <PopupState variant="popover" popupId="demo-popup-popover">
        {popupState => (
          <>
            <ThemeProvider theme={theme2}>
              <a {...bindTrigger(popupState)}>
                <Icon icon={user} size={32} />
                {name} {last_name}
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
                      fetch("api/abortses.php");
                      window.location.reload();
                    }}
                  >
                    Выйти
                  </Button>
                </Box>
              </Popover>
            </ThemeProvider>
          </>
        )}
      </PopupState>
    );
  }
}

const mapStateToProps = (state: AppState) => ({ user: state.app.user });

const connector = connect(mapStateToProps, {});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(User);
