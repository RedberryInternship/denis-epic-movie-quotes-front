import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const useLanguageSelector = () => {
  const router = useRouter();
  const setLocale = async (newLocale: string) => {
    const { pathname, asPath, query } = router;
    await router.push({ pathname, query }, asPath, { locale: newLocale });
    if (document.activeElement) (document.activeElement as HTMLElement).blur();
  };

  const { t } = useTranslation('common');
  return { setLocale, t };
};
