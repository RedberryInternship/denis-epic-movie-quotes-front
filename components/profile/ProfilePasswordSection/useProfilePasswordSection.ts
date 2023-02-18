import { useToggle } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useProfilePasswordSection = () => {
  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);

  const { t } = useTranslation('profile');

  return {
    passwordIsHidden,
    togglePasswordIsHidden,
    t,
  };
};
