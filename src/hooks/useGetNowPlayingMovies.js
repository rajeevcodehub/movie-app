import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { nowPlayingMoviesAPI } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      nowPlayingMoviesAPI,
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

};

export default useGetNowPlayingMovies;
