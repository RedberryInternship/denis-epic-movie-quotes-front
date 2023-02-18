import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const useSideMenu = () => {
  const { t } = useTranslation('common');

  const router = useRouter();

  return { router, t };
};
