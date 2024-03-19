import { useSelector } from "react-redux";
import language from "../utils/language";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import openai from "../utils/openai";
import {  useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/gptSlice";
const Search = () => {
    const dispatch = useDispatch()
    const languageSelected = useSelector((store) => store.config?.lang);
    const searchText = useRef(null);
    const searchTMDBMovies = async(movie) => {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+{movie}+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const jsonData = await response.json();
        const movies = jsonData?.results;
        return movies;
    }

    const handleSearch = async() => {
        const movieSerchText = searchText.current.value;
        console.log("hi");
        let gptMovies  = [];
        try {
            const gptQuery = "Act Like a movie Recommendation System and recommend 5 movie name related to " + movieSerchText+". Only give 5 movies name comma separated like example: movie1, movie2, movie3, movie4, movie5";
            const movieRecommended = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
              });
             gptMovies = movieRecommended.choices?.[0]?.message?.content.split(",");
             console.log(gptMovies);

            //  ['The Conjuring', ' The Exorcist', ' Get Out', ' Hereditary', ' A Quiet Place']
            const promiseArray = gptMovies.map((movie) => searchTMDBMovies(movie));
            
            const tmdbResults = await Promise.all(promiseArray);
            dispatch(addGPTMovies(tmdbResults));
            console.log(tmdbResults);
        } catch(error){
            console.log(error);
        }
        
          
        
    }
    return (
        <div className=" flex gap-10">
            <input
                ref={searchText}
                type="text"
                placeholder={language[languageSelected]["search"]}
                className="absolute p-4 bg-gray-700 w-1/2 top-1/4 left-1/4 rounded-lg bg-opacity-80 text-white"
            />
            <button className="absolute top-1/4 left-3/4 p-4 bg-red-600 rounded-lg bg-opacity-80 text-white" onClick={handleSearch}>Search</button>
        </div>

    )
}

export default Search;