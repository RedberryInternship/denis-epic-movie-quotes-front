import { Translatable } from 'types';

export type PropsType = {
  id: number;
  image: string;
  title: Translatable;
  quoteCount: number;
  releaseYear: number;
};
