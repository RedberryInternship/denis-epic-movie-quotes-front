import { useLocale } from 'hooks';
import { Genre } from 'types';

export const useGenreSelect = (fetchedGenres: Genre[]) => {
  const locale = useLocale();

  const genres = fetchedGenres.map((genre) => ({
    label: genre.name[locale],
    value: genre.id,
    id: genre.id,
  }));

  return { genres };
};
