import { createSlice } from "@reduxjs/toolkit";
import { IDetails } from "../type";

const initialState: { movies: IDetails[] } = {
  movies: JSON.parse(localStorage.getItem("movies") || "") || [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
      state.movies = [...state.movies, action.payload];
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
  },
});

const { reducer, actions } = watchListSlice;

export const { addToWatchList } = actions;

export default reducer;
