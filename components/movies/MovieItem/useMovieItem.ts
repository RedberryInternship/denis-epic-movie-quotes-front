import { useLocale } from 'hooks';
import { useRouter } from 'next/router';

export const useMovieItem = (movieID: number) => {
  const locale = useLocale();
  const router = useRouter();

  const redirectToMovie = () => {
    router.push(`/movies/${movieID}`);
  };

  return { locale, redirectToMovie };
};
