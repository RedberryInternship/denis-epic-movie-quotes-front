import { UserFromDatabase } from 'types';

export type Comment = {
  id: number;
  body: string;
  user: Omit<UserFromDatabase, 'emails' | 'google_id'>;
};
