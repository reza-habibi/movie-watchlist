import React, { useEffect, useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../services/movieDetailsApi";
import { IDetails } from "../type";
import { addMovie, removeMovie } from "../redux/watchListAction";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Loading from './Loading';

const DetailsPage = () => {
  const [added, setAdded] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching } = useGetMovieDetailsQuery(id);
  const movie: IDetails = data;
  const dispatch = useAppDispatch();

  const { movies } = useAppSelector((state) => state.watchList);

  const AddToWatchList = (movie: IDetails) => {
    dispatch(addMovie(movie));
  };

  const RemoveFromWatchList = (id: string) => {
    dispatch(removeMovie(id));
    setAdded(false);
  };

  useEffect(() => {
    movies.find((storedMovie: IDetails) => storedMovie.imdbID === movie.imdbID)
      ? setAdded(true)
      : setAdded(false);
  }, [movies]);

  return isFetching ? (
    <Loading/>
  ) : (
    <div className="container shadow-lg dark:bg-black dark:shadow-white lg:p-12 p-6 rounded-lg">
      <button
        onClick={() => navigate("/")}
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Back
      </button>

      <div className="grid grid-cols-12">
        <div className="lg:col-span-3 col-span-12">
          <img src={movie.Poster} alt={movie.Title} className=" rounded-md" />
        </div>
        <div className="lg:col-span-9 col-span-12 mt-3 lg:mt-0 space-y-4">
          <div className="space-x-2">
            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg ">
              {movie.Type}
            </span>
            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg ">
              {movie.Rated}
            </span>
            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg">
              {movie.Year}
            </span>

            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg">
              {movie.Runtime}
            </span>
          </div>
          <div>
            <h2 className="text-gray-900 dark:text-white text-3xl font-semibold mb-4">
              {movie.Title}
            </h2>
            {!added ? (
              <button
                onClick={() => AddToWatchList(movie)}
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Add To Watchlist
              </button>
            ) : (
              <button
                onClick={() => RemoveFromWatchList(movie.imdbID)}
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-2"
              >
                Remove To Watchlist
              </button>
            )}
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className=" h-auto flex items-center lg:mr-12">
              <img
                src="/assets/images/imdb.svg"
                alt="imdb-log"
                className="mr-4 imdb-logo"
              />
              <span className=" text-lg font-semibold dark:text-white">
                {movie.imdbRating} / 10
              </span>
            </div>

            <div className=" h-auto flex items-center mt-4 lg:mt-0">
              <BsPeopleFill className="mr-2 text-3xl dark:text-white" />
              <span className=" text-lg font-semibold dark:text-white">
                {movie.imdbVotes}
              </span>
            </div>
          </div>

          <div>
            <span className="mr-2 lg:text-2xl font-bold dark:text-white">
              Actors :
            </span>{" "}
            <span className="px-4 py-1 rounded-xl text-gray-800 dark:text-white lg:text-xl font-semibold">
              {movie.Actors}
            </span>
          </div>
          <div>
            <span className="mr-2 lg:text-2xl font-bold dark:text-white">
              Director :
            </span>{" "}
            <span className="px-4 py-1 rounded-xl text-gray-800 dark:text-white lg:text-xl font-semibold">
              {movie.Director}
            </span>
          </div>
          <div>
            <span className="lg:text-2xl font-bold mb-2 dark:text-white">
              Overview :
            </span>
            <p className="text-justify text-base lg:font-semibold leading-loose dark:text-white">
              {movie.Plot}
            </p>
          </div>

          <div className=" my-4">
            {movie.Genre.split(",").map((genre: string, i: number) => (
              <span
                key={i}
                className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-2 py-1 text-base font-semibold text-gray-700 mr-2 mt-2 lg:mt-0"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
