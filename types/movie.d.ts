import { Translatable } from 'types';

export type Movie = {
  id: number;
  title: Translatable;
  description: Translatable;
  director: Translatable;
  image: string;
  release_year: number;
  budget: number;
};
