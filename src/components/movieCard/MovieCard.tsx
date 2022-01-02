import React from "react";
import MoviePoster from "./MoviePoster";
import { BsFillEmojiHeartEyesFill, BsHeartFill } from "react-icons/bs";
import { IMovies } from "./../../type.d";
import { useGetDetailsByImdbQuery } from "../../services/movieApi";

const MovieCard = ({ id }: { id: string }) => {
  const { data: movie, isFetching } = useGetDetailsByImdbQuery({
    type: "get-movie-details",
    id,
  });

  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg dark:shadow-white dark:bg-black">
      <div className="absolute top-0 flex justify-between w-full items-center p-4 z-50">
        <div className="bg-white  bg-opacity-50 px-2 rounded-lg">
          <span className="text-white dark:text-black text-sm font-semibold ">
            Movies
          </span>
        </div>

        <div className="bg-white  bg-opacity-50 p-2 rounded-full">
          <BsHeartFill className="text-white dark:text-black" />
        </div>
      </div>
      <MoviePoster id={movie.imdb_id} />
      <div className="py-6 px-4 text-left">
        <span className="text-gray-400 text-sm font-semibold ">
          {movie.countries ? movie.countries[0] : movie.countries} ,{" "}
          {movie.year}
        </span>

        <div className="font-bold text-xl my-6 dark:text-white">
          {movie.title}
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[50%] h-auto flex items-center">
            <img
              src="./assets/images/imdb.svg"
              alt="imdb-log"
              className="mr-4 imdb-logo"
            />
            <span className="w-[50%] text-base font-semibold dark:text-white">
              {movie.imdb_rating} / 10
            </span>
          </div>
          <div className="w-[50%] h-auto flex items-center justify-end">
            <BsFillEmojiHeartEyesFill
              className={`mr-2 ${
                +movie.popularity <= 30
                  ? "text-red-600"
                  : +movie.popularity <= 60
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            />
            <span className="w-[50%] text-base font-semibold dark:text-white">
              {Math.ceil(parseInt(movie.popularity))} / 100
            </span>
          </div>
        </div>
      </div>
      <div className="px-2 pt-4 mb-4">
        {movie.genres?.map((genre: string, i: number) => (
          <span
            className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
            key={i}
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
