import { useFormContext } from 'react-hook-form';
import { postLoginData } from 'services';
import { ApiResponse, LoginForm } from 'types';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useHandleSubmit, useToggle } from 'hooks';

export const useLoginModal = () => {
  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);

  const router = useRouter();
  const { register, setError } = useFormContext<LoginForm>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitSuccess = async () => {
    await router.push('/home');
  };
  const onSubmitError = (response: ApiResponse<LoginForm>) => {
    setError('username', {
      type: 'custom',
      message: response.message,
    });
  };
  const handleSubmit = useHandleSubmit<LoginForm>(
    postLoginData,
    onSubmitSuccess,
    onSubmitError,
    setIsLoading
  );

  return {
    handleSubmit,
    register,
    isLoading,
    passwordIsHidden,
    togglePasswordIsHidden,
  };
};
