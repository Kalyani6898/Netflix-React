import { useEffect } from "react";
import { OPTIONS } from "../util/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../util/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      OPTIONS
    );
    const json = await data?.json();
    const filterData = json?.results?.filter((ele) => ele.type === "Trailer");
    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
