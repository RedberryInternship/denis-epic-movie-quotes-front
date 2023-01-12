import { ChangeEvent } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export const useValidatePasswordConfirmation = (passwordConfirmationRule: {
  validate: (value: string) => void;
}) => {
  const passwordValue = useWatch({ name: 'password' });
  const passwordConfirmationValue = useWatch({ name: 'password_confirmation' });
  const { setError, clearErrors } = useFormContext();

  passwordConfirmationRule.validate = (value: string) =>
    value === passwordValue || 'The passwords do not match';

  return async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== passwordConfirmationValue) {
      setError('password_confirmation', {
        type: 'custom',
        message: 'The passwords do not match',
      });
    } else {
      clearErrors('password_confirmation');
    }
  };
};
