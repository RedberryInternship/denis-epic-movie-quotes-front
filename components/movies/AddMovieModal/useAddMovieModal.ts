import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { ApiResponse, MovieForm, RegisterForm } from 'types';
import { useHandleSubmit } from 'hooks';
import { sendAddMovieRequest } from 'services';
import { useQueryClient } from 'react-query';

export const useAddMovieModal = (closeModalCallback: () => void) => {
  const { setError } = useFormContext();

  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmitSuccess = async () => {
    closeModalCallback();
    await queryClient.refetchQueries('movies');
  };
  const onSubmitError = (response: ApiResponse<MovieForm>) => {
    if (response.errors) {
      for (const [fieldName, errors] of Object.entries<any>(response.errors))
        setError(fieldName as keyof RegisterForm, {
          type: 'custom',
          message: errors[0],
        });
    }
  };
  const handleSubmit = useHandleSubmit<MovieForm>(
    sendAddMovieRequest,
    onSubmitSuccess,
    onSubmitError,
    setIsLoading
  );

  return { handleSubmit, isLoading };
};
