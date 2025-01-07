import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../util/userSlice";
import movieReducer from "../util/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
export default appStore;
