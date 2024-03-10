import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { nowPlayingMoviesAPI } from "../utils/constant";

const useGetNowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      nowPlayingMoviesAPI,
      API_OPTIONS
    );
    const data = await response.json();
    setNowPlayingMovies(data.results);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return nowPlayingMovies;
};

export default useGetNowPlayingMovies;
