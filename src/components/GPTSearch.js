import React from "react";
import { NetflixBackgroungImage } from "../utils/constant";
import Search from "./Search";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
const GPTSearch = () => {
  const dispatch = useDispatch();
 const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div>
      <div className="absolute flex right-0 rounded-md p-5 ">
        <select className="rounded-sm" onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="german">German</option>
          <option value="french">French</option>
        </select>
      </div>
      <div>
        <Search />
        <img src={NetflixBackgroungImage} alt="image" />
      </div>
    </div>
  );
};

export default GPTSearch;
