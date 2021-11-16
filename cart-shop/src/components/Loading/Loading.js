import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loaidng">
      <Spinner animation="border" role="status"></Spinner>
      <h5>Cargando...</h5>
    </div>
  );
}
