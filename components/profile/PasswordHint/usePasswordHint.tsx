import { useWatch } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export const usePasswordHint = () => {
  const { t } = useTranslation('profile');

  const passwordValue = useWatch({ name: 'password' });
  const passwordMinLengthValid = passwordValue && passwordValue.length >= 8;
  const passwordMaxLengthValid = passwordValue && passwordValue.length < 16;

  return {
    passwordMaxLengthValid,
    passwordMinLengthValid,
    t,
  };
};
