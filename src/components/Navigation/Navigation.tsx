import React from "react";
import Link from "./Link/Link";
import Settings from "./Settings/Settings";
import { folder } from "react-icons-kit/fa/folder";
import { columns } from "react-icons-kit/fa/columns";
import { user } from "react-icons-kit/fa/user";

import ReactTooltip from "react-tooltip";
import User from "./User/User";

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

          <Settings />
          <User />
        </div>
      </div>
      <ReactTooltip effect={"solid"} place={"bottom"} />
    </div>
  );
};

export default Navigation;
