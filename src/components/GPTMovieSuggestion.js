import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((state) => state.gpt);
  console.log(movieName, movieResults);

  return (
    <div className="absolute top-64 bg-red-200 z-10 p-5">
      
      <h1 className="flex text-white  ">Movie Suggestion</h1>
      
      <div className="m-5">
      {movieName?.map((movie, key) => {
        return (
          <div className="">
            <div className="flex gap-2 ">
            <MovieList title = {movie} movies={movieResults[key]} />
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
