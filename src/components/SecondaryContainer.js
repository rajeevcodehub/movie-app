import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useGetPopularMovies from "../hooks/useGetPopularMovies";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies?.popularMovies);

  console.log(nowPlayingMovies);
  return (
    <div>
        {/* MovieList popular
        MovieCard * n
        MovieList nowPlayingMovies
        MovieList - trending 
        MovieLst horror */}
        <MovieList title = "Now Playing Movies" movies={nowPlayingMovies} />
        <MovieList title = "Popular Movies" movies={popularMovies} />
    </div>
  );
};

export default SecondaryContainer;