import { UserFromDatabase } from './user';
import { MovieQuote } from './movieQuote';

export type Notification = {
  id: number;
  is_comment: number;
  is_read: number;
  from_user: UserFromDatabase;
  quote: MovieQuote;
  created_at: string;
};
