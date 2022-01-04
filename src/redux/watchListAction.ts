import { addToWatchList, removeFromWatchList } from "./watchListSlicer";
import { IDetails } from "../type";

export const addMovie = (movie: IDetails) => (dispatch: any) => {
  dispatch(addToWatchList(movie));
};

export const removeMovie = (id:string)=> (dispatch:any)=>{
  dispatch(removeFromWatchList(id))
}