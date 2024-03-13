import React from "react";
import { NetflixBackgroungImage } from "../utils/constant";
const GPTSearch = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search For Movies"
        className="absolute p-4 bg-gray-700 w-1/2 top-1/4 left-1/4 rounded-lg bg-opacity-80 text-white"
      />
      <img src={NetflixBackgroungImage} alt="image" />
    </div>
  );
}; 

export default GPTSearch;
