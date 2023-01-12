import { useFormContext } from 'react-hook-form';
import { ApiResponse, Modals, RegisterForm, SetState } from 'types';
import { useState } from 'react';
import { postRegisterData } from 'services';
import { validationRules } from './validationRules';
import { useToggle, useValidatePasswordConfirmation } from 'hooks';

export const useRegisterModal = (setActiveModal: SetState<Modals>) => {
  const { handleSubmit, getValues, setError } = useFormContext<RegisterForm>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    const response = (await postRegisterData(getValues())) as ApiResponse<
      keyof RegisterForm
    >;
    setIsLoading(false);

    if (response.success) {
      setActiveModal('confirm_sent');
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

  const validatePasswordConfirmation = useValidatePasswordConfirmation(
    validationRules.password_confirmation
  );

  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);

  return {
    handleSubmit,
    onSubmit,
    isLoading,
    validationRules,
    validatePasswordConfirmation,
    passwordIsHidden,
    togglePasswordIsHidden,
  };
};
