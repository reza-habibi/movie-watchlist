import React from "react";
import MoviePoster from "./MoviePoster";
import { BsPeopleFill, BsHeartFill } from "react-icons/bs";
import { IDetails, IMovies } from "./../../type.d";
import { useGetMovieDetailsQuery } from "../../services/movieDetailsApi";

const MovieCard = ({ id }: { id: string }) => {
  const { data, isFetching } = useGetMovieDetailsQuery(id);
  const movie: IDetails = data;
  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg dark:shadow-white dark:bg-black">
      <div className="absolute top-0 flex justify-between w-full items-center p-4 z-50">
        <div className="bg-white  bg-opacity-50 px-2 rounded-lg">
          <span className="text-white dark:text-black text-sm font-semibold ">
            {movie.Type}
          </span>
        </div>

        <div className="bg-white  bg-opacity-50 p-2 rounded-full">
          <BsHeartFill className="text-white dark:text-black" />
        </div>
      </div>
      <MoviePoster poster={movie.Poster} title={movie.Title} />
      <div className="py-6 px-4 text-left">
        <span className="text-gray-400 text-sm font-semibold ">
          {movie.Country.split(',')[0]} ,{movie.Year}
        </span>

        <div className="font-bold text-xl my-6 dark:text-white">
          {movie.Title}
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[50%] h-auto flex items-center">
            <img
              src="./assets/images/imdb.svg"
              alt="imdb-log"
              className="mr-4 imdb-logo"
            />
            <span className="w-[50%] text-base font-semibold dark:text-white">
              {movie.imdbRating} / 10
            </span>
          </div>
          <div className="w-[50%] h-auto flex items-center justify-end">
            <BsPeopleFill className="mr-2" />
            <span className="w-[50%] text-base font-semibold dark:text-white">
              {movie.imdbVotes}
            </span>
          </div>
        </div>
      </div>
      <div className="px-2 mb-4">
        {movie.Genre.split(",").map((genre: string , i:number) => (
          <span key={i} className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
