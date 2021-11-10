import React from "react";

// scss
import "./MovieList.scss";

// Components
import { List, Avatar, Button } from "antd";

// React Router Dom
import { Link } from "react-router-dom";

// Project Components
import Loading from "../Loading/Loading";

import { RightOutlined } from "@ant-design/icons";
import { URL_IMG } from "../../utils/constants";

export default function MovieList(props) {
  const { movies = {}, title } = props;

  const { loading, result } = movies;
  console.log(movies);

  if (loading || !result) {
    return <Loading />;
  }

  // return "Movies";

  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
}

function RenderMovie(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  console.log(poster_path);
  const posterPath = `${URL_IMG}${poster_path}`;

  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />}></Button>
      </Link>
    </List.Item>
  );
}
