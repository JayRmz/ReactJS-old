import React from "react";
import { Col, Card, Grid } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./MovieCatalog.scss";
import { URL_IMG } from "../../utils/constants";

export default function MovieCatalog(props) {
  const { movies } = props;

  const { results } = movies;

  return results.map((movie) => (
    // <Col key={movie.id} className="movie-catalog">
    <MovieCard movie={movie} />
    // </Col>
  ));
}

function MovieCard(props) {
  const { movie } = props;
  const { id, title, poster_path } = movie;
  const { Meta } = Card;

  const posterPath = `${URL_IMG}${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={posterPath} />}
        actions={[<EyeOutlined />]}
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
}
