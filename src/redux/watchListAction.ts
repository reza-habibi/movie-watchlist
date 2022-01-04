import { addToWatchList, removeFromWatchList } from "./watchListSlicer";
import { IDetails } from "../type";
import { toast } from 'react-toastify';

export const addMovie = (movie: IDetails) => (dispatch: any) => {
  dispatch(addToWatchList(movie));
  toast.success('Movie added into your watchlist!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

export const removeMovie = (id:string)=> (dispatch:any)=>{
  dispatch(removeFromWatchList(id))
}