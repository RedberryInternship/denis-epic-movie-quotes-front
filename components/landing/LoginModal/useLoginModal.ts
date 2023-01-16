import { useFormContext } from 'react-hook-form';
import { postLoginData } from 'services';
import { ApiResponse, LoginForm } from 'types';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useHandleSubmit, useToggle } from 'hooks';
import { useTranslation } from 'next-i18next';

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

  const { t } = useTranslation('auth');

  return {
    handleSubmit,
    register,
    isLoading,
    passwordIsHidden,
    togglePasswordIsHidden,
    t,
  };
};
