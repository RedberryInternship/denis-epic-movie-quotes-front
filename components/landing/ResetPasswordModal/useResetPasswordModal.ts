import { useFormContext } from 'react-hook-form';
import { ApiResponse, Modals, ResetPasswordForm, SetState } from 'types';
import { postResetPassData } from 'services';
import {
  useHandleSubmit,
  useToggle,
  useValidatePasswordConfirmation,
} from 'hooks';
import { validationRules } from './validationRules';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const useResetPasswordModal = (setActiveModal: SetState<Modals>) => {
  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);

  const validatePasswordConfirmation = useValidatePasswordConfirmation(
    validationRules.password_confirmation
  );

  const router = useRouter();
  const token = router.query.token as string;
  const email = router.query.email as string;
  const { setError } = useFormContext<ResetPasswordForm>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitSuccess = async () => {
    setActiveModal('password_changed');
    await router.replace({ query: null }, undefined, {
      shallow: true,
    });
  };
  const onSubmitError = (response: ApiResponse<ResetPasswordForm>) => {
    if (response.errors) {
      for (const [fieldName, errors] of Object.entries<any>(response.errors))
        setError(fieldName as keyof ResetPasswordForm, {
          type: 'custom',
          message: errors,
        });
    }
  };
  const submitRequest = (formValues: ResetPasswordForm) =>
    postResetPassData(formValues, { token, email });

  const handleSubmit = useHandleSubmit<ResetPasswordForm>(
    submitRequest,
    onSubmitSuccess,
    onSubmitError,
    setIsLoading
  );

  const { t } = useTranslation('auth');

  return {
    handleSubmit,
    isLoading,
    validationRules,
    validatePasswordConfirmation,
    passwordIsHidden,
    togglePasswordIsHidden,
    t,
  };
};
