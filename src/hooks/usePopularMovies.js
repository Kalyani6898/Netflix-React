import React, { useEffect } from "react";
import { OPTIONS } from "../util/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../util/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    console.log(json);
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  return <div></div>;
};

export default usePopularMovies;
