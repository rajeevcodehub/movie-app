import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GPTMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((state) => state.gpt);
  console.log(movieName, movieResults);

  return (
    <div className="absolute top-64">
      <h1 className="  text-white">Movie Suggestion</h1>
      <div className="">
      {movieName?.map((movie, key) => {
        return (
          <div className="">
            <h1 className="text-orange-600">{movie}</h1>
            <div className="flex">
            {movieResults[key]?.map((movie, key) => {
               return <MovieCard movie={movie} />
                
            })}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
