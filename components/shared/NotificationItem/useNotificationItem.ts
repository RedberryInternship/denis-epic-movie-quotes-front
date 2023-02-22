import { MovieQuote } from 'types';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const useNotificationItem = (quote: MovieQuote) => {
  const router = useRouter();

  const redirectToViewQuote = async () => {
    await router.push(`/movies/${quote.movie_id}?view_quote_id=${quote.id}`);
  };

  const { t } = useTranslation('common');

  return { redirectToViewQuote, t };
};
