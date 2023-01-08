import { useFormContext, useWatch } from 'react-hook-form';
import { ApiResponse, RegisterForm } from 'types';
import { useState } from 'react';
import { postRegisterData } from 'services';

export const useRegisterModal = (
  displayConfirmationsSplash: () => void,
  hideRegisterForm: () => void
) => {
  const { handleSubmit, getValues, setError, clearErrors } =
    useFormContext<RegisterForm>();

  const [isLoading, setIsLoading] = useState(false);
  const passwordValue = useWatch({ name: 'password' });
  const passwordConfirmationValue = useWatch({ name: 'password_confirmation' });

  const onSubmit = async () => {
    setIsLoading(true);
    const response = (await postRegisterData(getValues())) as ApiResponse<
      keyof RegisterForm
    >;
    setIsLoading(false);

    if (response.success) {
      hideRegisterForm();
      displayConfirmationsSplash();
    } else {
      if (response.errors) {
        for (const [fieldName, errors] of Object.entries<any>(response.errors))
          setError(fieldName as keyof RegisterForm, {
            type: 'custom',
            message: errors[0],
          });
      }
    }
  };

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
