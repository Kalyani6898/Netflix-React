import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailerVideo: null,
    popularMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state?.nowPlayingMovies.push(...action.payload);
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
