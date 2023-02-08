import { Translatable } from 'types';

export type MovieQuote = {
  id: number;
  body: Translatable;
  image: string;
  likes: number[];
  likes_count: number;
  comments_count: number;
  movie_id: number;
};
