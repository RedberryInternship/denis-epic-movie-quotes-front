import { MovieQuote, SetState } from 'types';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const useNotificationItem = (
  quote: MovieQuote,
  setShowNotifications: SetState<boolean>
) => {
  const router = useRouter();

  const redirectToViewQuote = async () => {
    await router.push(`/movies/${quote.movie_id}?view_quote_id=${quote.id}`);
    setShowNotifications(false);
  };

  const { t } = useTranslation('common');

  return { redirectToViewQuote, t };
};
