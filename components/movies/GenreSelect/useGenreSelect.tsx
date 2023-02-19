import { useLocale } from 'hooks';
import { Genre } from 'types';
import { useTranslation } from 'next-i18next';

export const useGenreSelect = (fetchedGenres: Genre[]) => {
  const locale = useLocale();

  const genres = fetchedGenres.map((genre) => ({
    label: genre.name[locale],
    value: genre.id,
    id: genre.id,
  }));

  const { t } = useTranslation('common');

  return { genres, t };
};
