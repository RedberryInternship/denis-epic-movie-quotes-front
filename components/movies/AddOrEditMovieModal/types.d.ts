import { Genre, User } from 'types';

export type PropsType = {
  user: User;
  genres: Genre[];
  closeModal: () => void;
  isEditing?: boolean;
  movieID?: number;
};
