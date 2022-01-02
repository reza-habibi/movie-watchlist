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
      getRandomMovies: builder.query({
        query: () => createRequest(`/?type=get-random-movies&page=1`),
      }),
      getImageByImdb:builder.query({
          query:(imdbId)=>createRequest(`/?type=get-movies-images-by-imdb&imdb=${imdbId}`)
      })
    }),
  });

  export const {useGetRandomMoviesQuery , useGetImageByImdbQuery} = movieApi