import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_MOVIE_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_MOVIE_API_KEY
}

const baseUrl = process.env.REACT_APP_MOVIE_API_URL

const createRequest = (url) => ({ url, headers: movieApiHeaders });
export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getMovies: builder.query({
        query: ({type , page}) => createRequest(`/?type=${type}&page=${page?page:1}`),
      }),
      getDetailsByImdb : builder.query({
          query:({type , id})=>createRequest(`/?type=${type}&imdb=${id}`)
      }),
    }),
  });

  export const {useGetMoviesQuery , useGetDetailsByImdbQuery} = movieApi