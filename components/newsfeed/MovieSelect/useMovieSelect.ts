import { useQuery } from 'react-query';
import { getMovies } from 'services';
import { useLocale } from 'hooks';
import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';

export const useMovieSelect = () => {
  const locale = useLocale();

  const { setValue } = useFormContext();
  const movieValue = useWatch({ name: 'movie' });
  useEffect(() => {
    setValue('movie_id', movieValue?.id);
  }, [movieValue?.id, setValue]);

  const { data: movies } = useQuery('movie-options', () => getMovies(''));

  const movieOptions = movies?.data.map((movie) => ({
    label: movie.title[locale],
    value: movie.id,
    id: movie.id,
  }));

  return { movieOptions, movieValue };
};
