import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies.length === 0) return;
  const mainMovie = movies[0];
  return (
    <div className="">
      <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
      {/* {mainMovie && <VideoBackground movieId={mainMovie.id} />} */}
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
