import { Genre } from 'types';

export type MovieForm = {
  title_en: string;
  title_ka: string;
  description_en: string;
  description_ka: string;
  director_en: string;
  director_ka: string;
  genres: Genre[];
  image: FileList | null;
};
