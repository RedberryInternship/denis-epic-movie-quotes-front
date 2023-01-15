import { useFormContext } from 'react-hook-form';
import { ApiResponse, Modals, RegisterForm, SetState } from 'types';
import { useState } from 'react';
import { postRegisterData } from 'services';
import { validationRules } from './validationRules';
import {
  useHandleSubmit,
  useToggle,
  useValidatePasswordConfirmation,
} from 'hooks';

export const useRegisterModal = (setActiveModal: SetState<Modals>) => {
  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);

  const validatePasswordConfirmation = useValidatePasswordConfirmation(
    validationRules.password_confirmation
  );

  const { setError } = useFormContext<RegisterForm>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitSuccess = async () => {
    setActiveModal('confirm_sent');
  };
  const onSubmitError = (response: ApiResponse<RegisterForm>) => {
    if (response.errors) {
      for (const [fieldName, errors] of Object.entries<any>(response.errors))
        setError(fieldName as keyof RegisterForm, {
          type: 'custom',
          message: errors[0],
        });
    }
  };
  const handleSubmit = useHandleSubmit<RegisterForm>(
    postRegisterData,
    onSubmitSuccess,
    onSubmitError,
    setIsLoading
  );

  return {
    handleSubmit,
    isLoading,
    validationRules,
    validatePasswordConfirmation,
    passwordIsHidden,
    togglePasswordIsHidden,
  };
};
