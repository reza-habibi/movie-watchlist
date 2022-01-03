export interface IMovies {
  title: string;
  imdb_id: string;
  year: string;
  countries: string[];
  directors: string[];
  genres: string[];
  imdb_rating: string;
  language: string[];
  popularity: string;
  rated: string;
  release_date: string;
  runtime: number;
  stars: string[];
  vote_count: string;
  youtube_trailer_key: string;
}


export interface IDetails{
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language:string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: object[]
  Released: string
  Response: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
}
