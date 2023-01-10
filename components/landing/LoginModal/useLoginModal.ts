import { useFormContext } from 'react-hook-form';
import { postLoginData } from 'services';
import { ApiResponse, LoginForm } from 'types';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const useLoginModal = () => {
  const router = useRouter();
  const { register, handleSubmit, getValues, setError } =
    useFormContext<LoginForm>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    const response = (await postLoginData(
      getValues()
    )) as ApiResponse<LoginForm>;
    setIsLoading(false);

    if (response.success) {
      await router.push('/home');
    } else {
      setError('username', {
        type: 'custom',
        message: response.message,
      });
    }
  };

  return { handleSubmit, onSubmit, register, isLoading };
};
