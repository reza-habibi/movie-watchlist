import { createSlice } from "@reduxjs/toolkit";
import { IDetails } from "../type";

const initialState: { movies: IDetails[] } = {
  movies: localStorage.getItem('movies') ? JSON.parse(localStorage.getItem("movies") || "") : [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
      state.movies.push(action.payload)
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
    removeFromWatchList: (state, { payload }) => {
      state.movies = state.movies.filter(
        (movie: IDetails) => movie.imdbID !== payload
      );
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
  },
});

const { reducer, actions } = watchListSlice;

export const { addToWatchList , removeFromWatchList } = actions;

export default reducer;



