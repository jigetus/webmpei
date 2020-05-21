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
    <header className={"navigation"}>
      <div className="navwidth">
        <div className="logo">
          <a href="/">
            <h3 className={"logo_header noselect"}>WebMPEI</h3>
          </a>
        </div>
        <div className="helpspace" />
        <div className="menu">
          <Link to={"/"} title={"Мои проекты"} icon={folder} />
          <Link to={"/editor"} title={"Редактор"} icon={columns} />
          <a
            href={"/phpmyadmin/index.php"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={database} size={32} />
            База данных
          </a>
          <Settings />
          <User />
        </div>
      </div>
      <ReactTooltip effect={"solid"} place={"bottom"} />
    </header>
  );
};

export default Navigation;
