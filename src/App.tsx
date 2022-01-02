import React from 'react';

import { useGetRandomMoviesQuery } from './services/movieApi'
import MoviePoster from './components/MoviePoster';


function App() {

  const { data, isFetching } = useGetRandomMoviesQuery({})

  if (isFetching) return <div>Loading...</div>

  const randomMovie = data?.movie_results


  return (
    <div className="App">
      {randomMovie.map((movie: any) => <MoviePoster id={movie.imdb_id} />)
      }
    </div>
  );
}

export default App;
