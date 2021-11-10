import React from "react";
import { Row, Col, Button } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { URL_API, API_KEY, URL_IMG } from "../../utils/constants";
import Loading from "../../components/Loading";
import "./movie.scss";

export default function Movie() {
  const { id } = useParams();

  const movieInfo = useFetch(
    `${URL_API}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  if (movieInfo.loading || !movieInfo.result) {
    return <Loading />;
  }

  return <RenderMovie movieInfo={movieInfo.result} />;
}

function RenderMovie(props) {
  const { movieInfo = {} } = props;

  const { title, backdrop_path, poster_path } = movieInfo;
  const backdropPath = `${URL_IMG}${backdrop_path}`;

  console.log(movieInfo);
  return (
    <div
      className="movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="movie__dark"></div>
      <Row>
        <Col span={8} offset={3} className="movie__poster">
          <PosterMovie image={poster_path} />
        </Col>
        <Col span={10} className="movie__info">
          <MovieInfo movieInfo={movieInfo} />
        </Col>
      </Row>
    </div>
  );
}

function PosterMovie(props) {
  const { image } = props;
  const posterPath = `${URL_IMG}${image}`;

  return <div style={{ backgroundImage: `url('${posterPath}')` }} />;
}

function MovieInfo(props) {
  const { movieInfo } = props;
  console.log(movieInfo);
  const { title, id, release_date, overview, genres } = movieInfo;

  return (
    <>
      <div className="movie__info-header">
        <h1>
          {title} <span>{moment(release_date).year()}</span>
        </h1>
        <button>Trailer</button>
      </div>
      <div className="movie__info-content ">
        <h3>General</h3>
        <p>{overview}</p>

        <h3>Genres </h3>
        <ul>
          {genres.map((gender) => (
            <li key={gender.id}>{gender.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
