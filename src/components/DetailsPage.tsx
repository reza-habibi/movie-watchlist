import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../services/movieDetailsApi";
import { IDetails } from "../type";

const DetailsPage = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetMovieDetailsQuery(id);
  const movie: IDetails = data;
  return isFetching ? (
    <div>loading...</div>
  ) : (
    <div className="container shadow-lg dark:bg-black dark:shadow-white p-12 rounded-lg">
      <div className="grid grid-cols-12">
        <div className="lg:col-span-3 col-span-12">
          <img src={movie.Poster} alt={movie.Title} className=" rounded-md" />
        </div>
        <div className="lg:col-span-9 col-span-12 mt-3 lg:mt-0">
          <div>
            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg mr-2">
              {movie.Type}
            </span>
            <span className="lg:text-base text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-gray-200 px-2 py-1 rounded-lg">
              {movie.Rated}
            </span>
          </div>
          <div>
              <h2 className="text-gray-900 dark:text-white">{movie.Title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
