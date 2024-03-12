import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const useGetPopularMovies = () => {
    const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const jsonData = await response.json();
    const popularMovies = jsonData?.results;
    dispatch(addPopularMovies(popularMovies));
    console.log(popularMovies);
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useGetPopularMovies;