import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector(store => store.movies?.upComingMovies);

  return (
    <div>
        <MovieList title = "Now Playing Movies" movies={nowPlayingMovies} />
        <MovieList title = "Popular Movies" movies={popularMovies} />
        <MovieList title = "Top Rated Movies" movies={topRatedMovies} />
        <MovieList title = "Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;