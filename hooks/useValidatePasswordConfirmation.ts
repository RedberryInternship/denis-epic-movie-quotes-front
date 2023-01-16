import { ChangeEvent } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export const useValidatePasswordConfirmation = (passwordConfirmationRule: {
  validate: (value: string) => void;
}) => {
  const { t } = useTranslation('validation');
  const passwordValue = useWatch({ name: 'password' });
  const passwordConfirmationValue = useWatch({ name: 'password_confirmation' });
  const { setError, clearErrors } = useFormContext();

  passwordConfirmationRule.validate = (value: string) =>
    value === passwordValue || t('password_no_match');

  return async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== passwordConfirmationValue) {
      setError('password_confirmation', {
        type: 'custom',
        message: t('password_no_match') as string,
      });
    } else {
      clearErrors('password_confirmation');
    }
  };
};
