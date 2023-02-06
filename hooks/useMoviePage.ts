import { useLocale, useUserStore } from 'hooks';
import { deleteMovie, getMovie } from 'services';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { MovieQuote, MovieWithGenres, UserFromDatabase } from 'types';

export const useMoviePage = (
  initialUser: UserFromDatabase,
  initialMovie: MovieWithGenres,
  initialQuotes: MovieQuote[]
) => {
  const user = useUserStore(initialUser);

  const fetchMovie = async () => {
    const response = await getMovie(initialMovie.id);
    return response.data;
  };

  const { data } = useQuery(['movie', initialMovie.id], fetchMovie, {
    initialData: { movie: initialMovie, quotes: initialQuotes },
  });

  const movie = data?.movie;
  const quotes = data?.quotes;

  const router = useRouter();
  const locale = useLocale();

  const deleteHandler = async () => {
    await deleteMovie(movie?.id as number);
    await router.replace('/movies');
  };

  return {
    user,
    movie,
    quotes,
    deleteHandler,
    locale,
  };
};
