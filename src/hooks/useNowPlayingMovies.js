import { OPTIONS } from "../util/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../util/movieSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );
    const json = await data.json();
    if (json?.results) {
      dispatch(addNowPlayingMovies(json.results));
    } else {
      console.error("No results in API response:", json);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
