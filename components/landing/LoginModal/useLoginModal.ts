import { useFormContext } from 'react-hook-form';
import { LoginForm } from 'types';
import { useState } from 'react';

export const useLoginModal = () => {
  const { register, handleSubmit } = useFormContext<LoginForm>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {};

  return { handleSubmit, onSubmit, register, isLoading };
};
