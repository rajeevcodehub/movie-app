import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";

const Browse = () => {
  useGetNowPlayingMovies();
  return (
    <div className="">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
