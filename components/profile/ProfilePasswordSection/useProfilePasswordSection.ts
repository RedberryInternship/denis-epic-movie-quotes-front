import { useTranslation } from 'next-i18next';

export const useProfilePasswordSection = () => {
  const { t } = useTranslation('profile');

  return {
    t,
  };
};
