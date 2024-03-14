import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="flex gap-2 scroll-mx-0 overflow-x-auto scrollbar-">
      {movies?.map((movie, key) => (
        <MovieCard movie={movie} />
      ))}
      </div>
    </div>
  );
};

export default MovieList;
