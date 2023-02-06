import { Genre, Movie } from 'types';

export type MovieWithGenres = Movie & { genres: Genre[] };
