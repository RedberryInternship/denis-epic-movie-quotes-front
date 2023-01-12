import { useCallback } from 'react';
import { ApiResponse, SetState } from 'types';
import { useFormContext } from 'react-hook-form';

export const useHandleSubmit = <T extends object>(
  submitRequest: (formValues: T, args: any) => Promise<unknown>,
  successCallback: () => void,
  errorCallback: (response: ApiResponse<T>) => void,
  setIsLoading: SetState<boolean>,
  submitArg?: {}
) => {
  const { handleSubmit } = useFormContext<T>();

  const onSubmit = useCallback(
    async (formValues: T) => {
      setIsLoading(true);
      const response = (await submitRequest(
        formValues,
        submitArg
      )) as ApiResponse<T>;
      setIsLoading(false);

      if (response.success) {
        successCallback();
      } else {
        errorCallback(response);
      }
    },
    [errorCallback, setIsLoading, submitArg, submitRequest, successCallback]
  );

  return handleSubmit(onSubmit);
};
