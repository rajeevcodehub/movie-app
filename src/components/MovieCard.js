const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="w-36 ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie poster"
        />
      </div>
      <h1>{movie.title}</h1>
      {/* <p>{movie.overview}</p> */}
    </div>
  );
};

export default MovieCard;
