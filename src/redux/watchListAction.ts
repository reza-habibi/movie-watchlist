import { addToWatchList } from "./watchListSlicer";
import { IDetails } from "../type";

export const addMovie = (movie: IDetails) => (dispatch: any) => {
  dispatch(addToWatchList(movie));
};
