import React from "react";
import Link from "./Link/Link";
import Settings from "./Settings/Settings";
import { folder } from "react-icons-kit/fa/folder";
import { columns } from "react-icons-kit/fa/columns";
import { database } from "react-icons-kit/fa/database";

import ReactTooltip from "react-tooltip";
import User from "./User/User";
import Icon from "react-icons-kit";

const Navigation = () => {
  return (
    <div className={"navigation"}>
      <div className="navwidth">
        <div className="logo">
          <img src="/icons/logo.png" alt="" />
        </div>
        <div className="helpspace" />
        <div className="menu">
          <Link to={"/"} title={"Мои проекты"} icon={folder} />
          <Link to={"/editor"} title={"Редактор"} icon={columns} />
          <a href={"/"}>
            <Icon icon={database} size={32} />
            База данных
          </a>
          <Settings />
          <User />
        </div>
      </div>
      <ReactTooltip effect={"solid"} place={"bottom"} />
    </div>
  );
};

export default Navigation;
