import { useDispatch } from "react-redux";
import { API_OPTIONS, movie_API } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (props) => {
    const {movieId} = props
  const dispatch = useDispatch();
  const getMoviesVideo = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", API_OPTIONS);
    const movieJson = await response.json();
    const movieClips = movieJson?.results;
    const movieTrailer = movieClips?.filter((movie) => movie?.type === "Trailer");
    const trailer = movieTrailer.length ? movieTrailer[0] : movieClips[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
