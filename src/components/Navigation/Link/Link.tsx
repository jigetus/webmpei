import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Icon from "react-icons-kit";

interface ILink {
  title: String;
  to: string;
  icon?: any;
}

class Link extends Component<ILink> {
  render() {
    const { title, to, icon } = this.props;
    return (
      <NavLink to={to} activeClassName="active" exact>
        <Icon icon={icon} size={32} />
        {title}
      </NavLink>
    );
  }
}

export default Link;
