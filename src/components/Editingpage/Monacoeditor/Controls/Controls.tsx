import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import theme from "../../../../utils/Colors";
import { ThemeProvider } from "@material-ui/core";
import ReactTooltip from "react-tooltip";
import { AppState } from "../../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { SaveTabs } from "../../../../redux/Files/actions";
import { ITab } from "../../../../redux/Editor/types";
import postData from "../../../../utils/functions";
import { toast } from "react-toastify";

class Controls extends Component<PropsFromRedux> {
  render() {
    const {
      SaveTabs,
      activeProjectName,
      tabs,
      preview_path,
      preview_visible
    } = this.props;
    if (tabs.length === 0) return null;
    return (
      <div className={"controls"}>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            data-tip="Сохранить все вкладки"
            onClick={() => {
              const { login } = this.props.user;
              const reqtabs: any = [];
              tabs.map((item: ITab) => {
                // @ts-ignore
                const data = item.model.getValue();
                reqtabs.push({
                  path: item.file.path,
                  data,
                  filetype: item.file.filetype
                });
                return item;
              });
              const request = {
                login: login,
                tabs: reqtabs
              };
              postData("api/savefiles.php", request).then(res => {
                if (res.code === 200) {
                  toast.info(res.data.message, {
                    position: "bottom-right",
                    autoClose: 1800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  });
                  if (preview_visible && preview_path !== null) {
                    const iframe = document.getElementById("iframe_id");
                    // @ts-ignore
                    iframe.contentWindow.location.reload();
                  }
                }
                if (res.code === 400) {
                  toast.error(res.data);
                }
              });
              SaveTabs(tabs, activeProjectName);
            }}
            id="save__btn"
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
  activeProjectName: state.editor.activeProjectName,
  user: state.app.user,
  preview_path: state.editor.preview_path,
  preview_visible: state.editor.preview_visible
});

const connector = connect(mapStateToProps, { SaveTabs });

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Controls);
