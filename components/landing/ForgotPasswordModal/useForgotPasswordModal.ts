import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ApiResponse, ForgotForm, Modals, SetState } from 'types';
import { postForgotPassData } from 'services';

export const useForgotPasswordModal = (setActiveModal: SetState<Modals>) => {
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, getValues, setError } = useFormContext<ForgotForm>();

  const onSubmit = async () => {
    setIsLoading(true);
    const response = (await postForgotPassData(
      getValues()
    )) as ApiResponse<ForgotForm>;
    setIsLoading(false);

    if (response.success) {
      setActiveModal('password_sent');
    } else {
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
    }
  };

  return { handleSubmit, onSubmit, isLoading };
};
