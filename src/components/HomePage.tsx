import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  useGetMoviesQuery,
  useGetPopularMoviesQuery,
} from "../services/movieApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import MovieCard from "./movieCard/MovieCard";
import SwiperCore, { Pagination } from "swiper";
import { IMovies } from "./../type.d";
import DropDownList from "./DropDownList";
import Loading from './Loading';

// install Swiper modules
SwiperCore.use([Pagination]);
const HomePage = () => {
  const { data: randMovie } = useGetMoviesQuery({
    type: "get-random-movies",
  });
  const randomMovies = randMovie?.movie_results;

  const { data: boxOffice } = useGetMoviesQuery({
    type: "get-boxoffice-movies",
  });
  const boxOfficeMovies = boxOffice?.movie_results;

  const { data: popular, isFetching } = useGetPopularMoviesQuery({
    type: "get-popular-movies",
    year: "2020",
  });
  const popularMovies = popular?.movie_results;

  return isFetching ? (
    <Loading/>
  ) : (
    <>
      <DropDownList />
      <div className="container mt-10">
        <div className="featured-movie ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{ delay: 1000 }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper "
          >
            {randomMovies?.map((movie: IMovies) => (
              <SwiperSlide key={movie.imdb_id} className="rounded-lg">
                <MovieCard id={movie.imdb_id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="featured-movie ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{ delay: 1000 }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper "
          >
            {boxOfficeMovies?.map((movie: any) => (
              <SwiperSlide key={movie.imdb_id} className="rounded-lg">
                <MovieCard id={movie.imdb_id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>{" "}
        <div className="featured-movie ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{ delay: 1000 }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper "
          >
            {popularMovies?.map((movie: any) => (
              <SwiperSlide key={movie.imdb_id} className="rounded-lg">
                <MovieCard id={movie.imdb_id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomePage;
