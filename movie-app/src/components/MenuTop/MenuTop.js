import React from "react";
import "./MenuTop.scss";

import { Menu } from "antd";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/new-movies">New Movies</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/popular">Popular</Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/search">Search</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
