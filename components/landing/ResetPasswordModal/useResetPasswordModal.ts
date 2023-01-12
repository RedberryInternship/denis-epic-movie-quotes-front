import { useFormContext } from 'react-hook-form';
import { ApiResponse, Modals, ResetPasswordForm, SetState } from 'types';
import { postResetPassData } from 'services';
import { useToggle, useValidatePasswordConfirmation } from 'hooks';
import { validationRules } from './validationRules';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const useResetPasswordModal = (setActiveModal: SetState<Modals>) => {
  const { handleSubmit, getValues, setError } =
    useFormContext<ResetPasswordForm>();

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const token = router.query.token as string;
  const email = router.query.email as string;
  const onSubmit = async () => {
    setIsLoading(true);
    const response = (await postResetPassData(
      getValues(),
      token,
      email
    )) as ApiResponse<keyof ResetPasswordForm>;
    setIsLoading(false);

    if (response.success) {
      setActiveModal('password_changed');
      await router.replace({ query: null }, undefined, {
        shallow: true,
      });
    } else {
      if (response.errors) {
        for (const [fieldName, errors] of Object.entries<any>(response.errors))
          setError(fieldName as keyof ResetPasswordForm, {
            type: 'custom',
            message: errors,
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
