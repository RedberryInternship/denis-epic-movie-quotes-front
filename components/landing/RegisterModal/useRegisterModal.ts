import { useFormContext } from 'react-hook-form';
import { ApiResponse, Modals, RegisterForm, SetState } from 'types';
import { useState } from 'react';
import { postRegisterData } from 'services';
import { useHandleSubmit, useToggle } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useRegisterModal = (setActiveModal: SetState<Modals>) => {
  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);
  const [isLoading, setIsLoading] = useState(false);

  const { setError } = useFormContext<RegisterForm>();

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

  const { t } = useTranslation('auth');

  return {
    handleSubmit,
    isLoading,
    passwordIsHidden,
    togglePasswordIsHidden,
    t,
  };
};
