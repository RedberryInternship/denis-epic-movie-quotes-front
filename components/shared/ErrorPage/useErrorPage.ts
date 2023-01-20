import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const useErrorPage = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const redirectToHome = () => router.push('/');
  return { redirectToHome, t };
};
