import { useCallback } from 'react';
import { ApiResponse, SetState } from 'types';
import { useFormContext } from 'react-hook-form';

export const useHandleSubmit = <T extends object>(
  submitRequest: (formValues: T) => Promise<unknown>,
  successCallback: () => void,
  errorCallback: (response: ApiResponse<T>) => void,
  setIsLoading: SetState<boolean>
) => {
  const { handleSubmit } = useFormContext<T>();

  const onSubmit = useCallback(
    async (formValues: T) => {
      setIsLoading(true);
      const response = (await submitRequest(formValues)) as ApiResponse<T>;
      setIsLoading(false);

      if (response.success) {
        successCallback();
      } else {
        errorCallback(response);
      }
    },
    [errorCallback, setIsLoading, submitRequest, successCallback]
  );

  return handleSubmit(onSubmit);
};
