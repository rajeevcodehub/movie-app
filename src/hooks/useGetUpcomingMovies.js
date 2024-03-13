import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useGetUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpComingMovies = async() => {
        const response =  await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
        const jsonData = await response.json();
        dispatch(addUpcomingMovies(jsonData.results));
    }
    useEffect(() => {
        getUpComingMovies();

    }, []);
}

export default useGetUpcomingMovies;