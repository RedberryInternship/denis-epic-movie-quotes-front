import { useTranslation } from 'next-i18next';

export const useGoogleAuthButton = () => {
  const { i18n } = useTranslation();
  return () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth/redirect?locale=${i18n.language}`;
  };
};
