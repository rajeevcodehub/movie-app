import React from "react";
import { NetflixBackgroungImage } from "../utils/constant";
import Search from "./Search";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
const GPTSearch = () => {
  const dispatch = useDispatch();
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="">
      <img src={NetflixBackgroungImage} alt="image" className="relative" />

      <div className="absolute flex top-0 right-0 rounded-md p-5 ">
        <select className="rounded-sm" onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="german">German</option>
          <option value="french">French</option>
        </select>
      </div>
      <Search />
      <GPTMovieSuggestion />
     
    </div>
  );
};

export default GPTSearch;
