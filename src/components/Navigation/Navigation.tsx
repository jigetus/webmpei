import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
      d="m13 9h5.5l-5.5-5.5v5.5m-7-7h8l6 6v12a2 2 0 0 1 -2 2h-12c-1.11 0-2-.9-2-2v-16c0-1.11.89-2 2-2m5 2h-5v16h5 7v-9h-7v-7z"
      fill="#42a5f5"
    />
  </svg>
);

class Navigation extends Component {
  render() {
    return (
      <div className={"navigation"}>
        <div className="navwidth">
          <NavLink to="/" activeClassName="active" exact>
            <div className="logo">
              <img src="/icons/logo.png" alt="" />
            </div>
          </NavLink>
          <div className="helpspace" />
          <div className="menu">
            <Link to={"/editor"} title={"Редактор"} icon={editorIcon} />
            <Link to={"/settings"} title={"Настройки"} icon={settingsIcon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
