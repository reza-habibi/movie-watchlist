import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetMoviesQuery } from "../services/movieApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import MovieCard from "./movieCard/MovieCard";
import SwiperCore, { Pagination } from "swiper";
import { IMovies } from "./../type.d";

// install Swiper modules
SwiperCore.use([Pagination]);
const HomePage = () => {
  const { data: randMovie, isFetching } = useGetMoviesQuery({
    type: "get-random-movies",
  });
  const randomMovies = randMovie?.movie_results;
  console.log(randomMovies);
  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
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
          {randomMovies.map((movie: IMovies) => (
            <SwiperSlide key={movie.imdb_id} className="rounded-lg">
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;