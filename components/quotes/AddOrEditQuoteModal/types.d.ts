import { MovieQuote, MovieWithGenres, User } from 'types';

export type PropsType = {
  user: User;
  closeModal: () => void;
  isEditing?: boolean;
  movie?: MovieWithGenres;
  quote?: MovieQuote;
  quoteID?: number;
};
