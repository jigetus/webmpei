import React, { Component } from "react";
import Link from "./Link/Link";

const editorIcon = (
  <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m13 9h5.5l-5.5-5.5v5.5m-7-7h8l6 6v12a2 2 0 0 1 -2 2h-12c-1.11 0-2-.9-2-2v-16c0-1.11.89-2 2-2m5 2h-5v16h5 7v-9h-7v-7z"
      fill="#42a5f5"
    />
  </svg>
);
const settingsIcon = (
  <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m12.002 15.5a3.5 3.5 0 0 1 -3.5 -3.5 3.5 3.5 0 0 1 3.5 -3.5 3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1 -3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65c-.04-.24-.25-.42-.5-.42h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.63c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"
      fill="#42a5f5"
    />
  </svg>
);
const projectsIcon = (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    version="1.1"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"
      fill="#7CB342"
      fillRule="nonzero"
    />
    <path d="m13.314 11.766h-1.1222v7.8554c0 .61774.50446 1.1222 1.1222 1.1222h7.8554v-1.1222h-7.8554zm8.9776-2.2444h-6.7332c-.61668 0-1.1222.50446-1.1222 1.1222v6.7332c0 .61774.50552 1.1222 1.1222 1.1222h6.7332c.61774 0 1.1222-.50446 1.1222-1.1222v-6.7332c0-.61774-.50446-1.1222-1.1222-1.1222zm-.5611 5.0499h-2.2444v2.2444h-1.1222v-2.2444h-2.2444v-1.1222h2.2444v-2.2444h1.1222v2.2444h2.2444z" />
  </svg>
);

class Navigation extends Component {
  render() {
    return (
      <div className={"navigation"}>
        <div className="navwidth">
          <div className="logo">
            <img src="/icons/logo.png" alt="" />
          </div>
          <div className="helpspace" />
          <div className="menu">
            <Link to={"/"} title={"Мои проекты"} icon={projectsIcon} />
            <Link to={"/editor"} title={"Редактор"} icon={editorIcon} />
            <Link to={"/settings"} title={"Настройки"} icon={settingsIcon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
