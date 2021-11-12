import React from "react";
import "./error404.scss";
import { Link } from "react-router-dom";
export default function Error404() {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <h2>Not found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}
