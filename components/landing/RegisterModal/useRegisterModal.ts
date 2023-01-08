import { useFormContext, useWatch } from 'react-hook-form';
import { RegisterForm } from 'types';
import { useState } from 'react';

export const useRegisterModal = () => {
  const { handleSubmit, setError, clearErrors } =
    useFormContext<RegisterForm>();

  const [isLoading, setIsLoading] = useState(false);
  const passwordValue = useWatch({ name: 'password' });
  const passwordConfirmationValue = useWatch({ name: 'password_confirmation' });

  const onSubmit = async () => {};

  return {
    handleSubmit,
    onSubmit,
    isLoading,
    passwordValue,
    passwordConfirmationValue,
    setError,
    clearErrors,
  };
};
