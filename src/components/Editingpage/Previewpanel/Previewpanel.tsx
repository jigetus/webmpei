import React, { Component } from "react";
import Iframe from "react-iframe";
import { AppState } from "../../../redux";
import { connect, ConnectedProps } from "react-redux";
import { Typography } from "@material-ui/core";

class Previewpanel extends Component<PropsFromRedux> {
  componentDidMount(): void {}

  render() {
    const { preview_resize, preview_path } = this.props;
    // @ts-ignore
    let display_path: string;
    if (preview_path !== null) {
      // @ts-ignore
      display_path = /[^/]*$/.exec(preview_path)[0];
    } else {
      display_path = "";
    }
    if (preview_resize)
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#e2b0af",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h4 style={{ color: "grey" }}>Задайте размер зоны предпросмотра</h4>
        </div>
      );
    if (preview_path === null)
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            paddingTop: "40px",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box"
          }}
        >
          <Typography
            style={{ marginTop: "20px", width: "200px", textAlign: "center" }}
          >
            Для выбора файла кликните правой кнопкой мыши по желаемому файлу и
            выберите <b>"Открыть в предпросмотре"</b>. <br /> Для предпросмотра
            доступны файлы с расширением php и html. Обновление происходит
            автоматически при сохранение файлов.
          </Typography>
          <img
            src={"/images/preview_guide.png"}
            alt={"preview_guide"}
            className={"preview_guide_image"}
          />
        </div>
      );
    const edited_path = preview_path.slice(2);
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "column",
          boxSizing: "border-box"
        }}
      >
        <Typography style={{ margin: "5px auto 5px auto" }}>
          {" "}
          <b>{display_path}</b>{" "}
        </Typography>
        <Iframe
          url={edited_path}
          width="100%"
          height="100%"
          id="iframe_id"
          className="iframe_preview"
          position="relative"
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  preview_resize: state.editor.preview_resize,
  preview_path: state.editor.preview_path
});

const connector = connect(mapStateToProps, {});

// @ts-ignore
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Previewpanel);
