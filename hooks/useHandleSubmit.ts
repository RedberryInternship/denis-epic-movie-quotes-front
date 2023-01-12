import { useCallback } from 'react';
import { ApiResponse, SetState } from '../types';
import { useFormContext } from 'react-hook-form';

export const useHandleSubmit = <T extends object>(
  submitRequest: (formValues: T, args: any) => Promise<unknown>,
  successCallback: () => void,
  errorCallback: (response: ApiResponse<T>) => void,
  setIsLoading: SetState<boolean>,
  submitArg?: {}
) => {
  const { handleSubmit, getValues } = useFormContext<T>();

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    const response = (await submitRequest(
      getValues(),
      submitArg
    )) as ApiResponse<T>;
    setIsLoading(false);

    if (response.success) {
      successCallback();
    } else {
      errorCallback(response);
    }
  }, [
    errorCallback,
    getValues,
    setIsLoading,
    submitArg,
    submitRequest,
    successCallback,
  ]);

  return handleSubmit(onSubmit);
};
