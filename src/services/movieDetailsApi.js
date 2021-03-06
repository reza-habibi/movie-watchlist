import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieDetailsApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_MOVIE_DETAILS_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_MOVIE_API_KEY || 'b9e7159050msh971df24e60cdcd8p1f0cf3jsn082005fb918c',
}

const baseUrl = process.env.REACT_APP_MOVIE_DETAILS_API_URL

const createRequest = (url) => ({ url, headers: movieDetailsApiHeaders });
export const movieDetailsApi = createApi({
    reducerPath: "movieDetailsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getMovieDetails: builder.query({
        query: (id) => createRequest(`/?r=json&i=${id}`),
      }),

    }),
  });

  export const {useGetMovieDetailsQuery } = movieDetailsApi



