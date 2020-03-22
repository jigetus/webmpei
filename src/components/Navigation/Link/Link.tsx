import React, { Component } from "react";
import { NavLink } from "react-router-dom";

interface ILink {
  title: String;
  to: string;
  icon?: any;
}

class Link extends Component<ILink> {
  render() {
    const { title, to, icon } = this.props;
    return (
      <NavLink to={to} activeClassName="active">
        {icon}
        {title}
      </NavLink>
    );
  }
}

export default Link;
