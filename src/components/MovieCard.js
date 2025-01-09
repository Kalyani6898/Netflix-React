import React from "react";
import { IMG_CDN_URL } from "../util/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img className="" src={IMG_CDN_URL + posterPath} alt="Movie Card"></img>
    </div>
  );
};

export default MovieCard;
