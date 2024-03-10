import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";

const Browse = () => {
    
   const nowPlayingMovies = useGetNowPlayingMovies();
   console.log(nowPlayingMovies);
   
    return (
       <div>
        <Header/>
       </div>
    );
}

export default Browse;