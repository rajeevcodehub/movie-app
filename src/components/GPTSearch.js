import React from "react";
import { NetflixBackgroungImage } from "../utils/constant";
import Search from "./Search";
const GPTSearch = () => {
  return (
    <div>
      <Search />
      <img src={NetflixBackgroungImage} alt="image" />
    </div>
  );
};

export default GPTSearch;
