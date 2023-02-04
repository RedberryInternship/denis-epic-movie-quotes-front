import { useLocale } from 'hooks';
import { useFormState } from 'react-hook-form';
import { Genre } from 'types';

export const useGenreSelect = (fetchedGenres: Genre[]) => {
  const locale = useLocale();

  const genres = fetchedGenres.map((genre) => ({
    label: genre.name[locale],
    value: genre.id,
    id: genre.id,
  }));

  const { errors } = useFormState();
  const hasErrors = Boolean(errors.genres);

  return { genres, hasErrors };
};
