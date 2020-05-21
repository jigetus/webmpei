import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import {
  FormControlLabel,
  FormGroup,
  Switch,
  ThemeProvider
} from "@material-ui/core";
import theme2 from "../../../utils/Colors";
import Icon from "react-icons-kit";
import { cog } from "react-icons-kit/fa/cog";
import { AppState } from "../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { SetPreviewVisible } from "../../../redux/Editor/actions";

class Settings extends Component<PropsFromRedux> {
  render() {
    const { preview_visible, SetPreviewVisible } = this.props;
    return (
      <PopupState variant="popover" popupId="demo-popup-popover">
        {popupState => (
          <>
            <ThemeProvider theme={theme2}>
              <a {...bindTrigger(popupState)}>
                <Icon icon={cog} size={32} />
                Настройки
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
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={preview_visible}
                          onChange={() => {
                            SetPreviewVisible(!preview_visible);
                            window.dispatchEvent(new Event("resize"));
                          }}
                          name="checkedA"
                        />
                      }
                      label="Включить предпросмотр"
                    />
                  </FormGroup>
                </Box>
                {/*<Box p={2}>*/}
                {/*  <FormGroup row>*/}
                {/*    <FormControlLabel*/}
                {/*      control={*/}
                {/*        <Switch*/}
                {/*          checked={true}*/}
                {/*          onChange={() => {}}*/}
                {/*          name="checkedA"*/}
                {/*        />*/}
                {/*      }*/}
                {/*      label="Автосохранение"*/}
                {/*    />*/}
                {/*  </FormGroup>*/}
                {/*</Box>*/}
                {/*<Box p={2}>*/}
                {/*  <Slider*/}
                {/*    defaultValue={14}*/}
                {/*    // aria-labelledby="discrete-slider-small-steps"*/}
                {/*    step={1}*/}
                {/*    min={10}*/}
                {/*    max={28}*/}
                {/*    valueLabelDisplay="auto"*/}
                {/*    onChange={() => {}}*/}
                {/*  />*/}
                {/*  Размер шрифта в редакторе*/}
                {/*</Box>*/}
              </Popover>
            </ThemeProvider>
          </>
        )}
      </PopupState>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  preview_visible: state.editor.preview_visible
});

const connector = connect(mapStateToProps, {
  SetPreviewVisible
});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Settings);
