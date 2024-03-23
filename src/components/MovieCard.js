const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;

  return (
    <div className="">
      {poster_path && (
        <div>
          <div className="w-40 ">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="movie poster"
            />
          </div>
          <h1 className="  text-black flex flex-auto">{title}</h1>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
