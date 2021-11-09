import React from "react";
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import { URL_API, API_KEY } from "../utils/constants";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  // console.log(movies);

  return (
    <>
      <SliderMovies movies={newMovies} />
    </>
  );
}
