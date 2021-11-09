import React from "react";
import "./SliderMovies.scss";

import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";

import { URL_API, URL_IMG } from "../../utils/constants";
import Loading from "../Loading";

export default function SliderMovies(props) {
  const { movies } = props;

  if (!movies.result || movies.loading) {
    return <Loading />;
  }

  const { results } = movies.result;

  return (
    <Carousel autoplay className="slider-movies">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;

  const backdropPath = `${URL_IMG}${backdrop_path}`;
  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver Más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
