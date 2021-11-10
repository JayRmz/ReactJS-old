import React from "react";
import useFetch from "../hooks/useFetch";

// components
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

// Constants
import { URL_API, API_KEY } from "../utils/constants";

// Ant Design
import { Row, Col } from "antd";
export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );

  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  const topRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />

      <Row>
        <Col span={12}>
          <MovieList movies={popularMovies} title="Popular" />
        </Col>

        <Col span={12}>
          <MovieList movies={topRatedMovies} title="Top Rated" />
        </Col>
      </Row>

      <Footer />
    </>
  );
}
