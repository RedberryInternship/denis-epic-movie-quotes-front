import { Comment, Movie, Translatable, UserFromDatabase } from 'types';

export type NewsfeedQuote = {
  id: number;
  body: Translatable;
  image: string;
  likes_count: number;
  user: Omit<UserFromDatabase, 'emails' | 'google_id'>;
  movie: Movie;
  comments: Comment[];
  likes: object[] | [];
};
