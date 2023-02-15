import { useFormContext } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { useState } from 'react';
import { useHandleSubmit } from 'hooks';
import { ApiResponse } from 'types';
import { showToast } from 'helpers';

export const useProfileModalSubmit = <T extends object>(
  submitRequest: (formValues: T) => Promise<unknown>,
  closeModalCallback: () => void,
  toastMessage: string,
  toastTitle?: string
) => {
  const [isLoading, setIsLoading] = useState(false);

  const { setError } = useFormContext();
  const queryClient = useQueryClient();

  const onSubmitSuccess = async () => {
    showToast(toastMessage, toastTitle);
    closeModalCallback();
    await queryClient.refetchQueries('user');
  };
  const onSubmitError = (response: ApiResponse<T>) => {
    if (response.errors) {
      for (const [fieldName, errors] of Object.entries<any>(response.errors))
        setError(fieldName, {
          type: 'custom',
          message: errors[0],
        });
    }
  };

  const handleSubmit = useHandleSubmit<T>(
    submitRequest,
    onSubmitSuccess,
    onSubmitError,
    setIsLoading
  );

  return { handleSubmit, isLoading };
};
