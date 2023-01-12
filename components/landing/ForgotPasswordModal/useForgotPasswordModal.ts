import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ApiResponse, ForgotForm, Modals, SetState } from 'types';
import { postForgotPassData } from 'services';
import { useHandleSubmit } from 'hooks';

export const useForgotPasswordModal = (setActiveModal: SetState<Modals>) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setError } = useFormContext<ForgotForm>();

  const onSubmitSuccess = () => {
    setActiveModal('password_sent');
  };
  const onSubmitError = (response: ApiResponse<ForgotForm>) => {
    if (response.errors) {
      setError('email', {
        type: 'custom',
        message: response.errors.email as string,
      });
    } else {
      setError('email', {
        type: 'custom',
        message: response.message,
      });
    }
  };
  const handleSubmit = useHandleSubmit<ForgotForm>(
    postForgotPassData,
    onSubmitSuccess,
    onSubmitError,
    setIsLoading
  );

  return { handleSubmit, isLoading };
};
