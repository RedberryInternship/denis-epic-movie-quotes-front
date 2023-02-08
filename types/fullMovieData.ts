import { MovieQuote, MovieWithGenres } from 'types';

export type FullMovieData = {
  movie: MovieWithGenres;
  quotes: MovieQuote[] | [];
};
