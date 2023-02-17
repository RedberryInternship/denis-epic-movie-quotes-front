import { Email, EmailFromDatabase } from 'types';

export type User = {
  id: number;
  username: string;
  emails: Email[];
  isGoogleUser: boolean;
  profilePicture: string;
};

export type UserFromDatabase = {
  id: number;
  username: string;
  emails: EmailFromDatabase[];
  google_id: string | null;
  profile_picture: string;
};
