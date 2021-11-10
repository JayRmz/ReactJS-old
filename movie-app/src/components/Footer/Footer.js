import React from "react";
import "./Footer.scss";
import { Layout } from "antd";

export default function Footer() {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <p>@SomeRandomDev</p>
    </Footer>
  );
}
