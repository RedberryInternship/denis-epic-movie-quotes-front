import { Email, EmailFromDatabase } from 'types';

export type User = {
  username: string;
  emails: Email[];
  isGoogleUser: boolean;
  profilePicture: string | null;
};

export type UserFromDatabase = {
  username: string;
  emails: EmailFromDatabase[];
  google_id: string | null;
  profile_picture: string | null;
};
