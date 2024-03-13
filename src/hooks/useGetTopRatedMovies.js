import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedNovies = async() => {
        const response =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
        const jsonData = await response.json();
        dispatch(addTopRatedMovies(jsonData.results));
    }
    useEffect(() => {
        getTopRatedNovies();

    }, []);
}

export default useGetTopRatedMovies;