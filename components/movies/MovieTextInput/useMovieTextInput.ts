import { useFormContext, useFormState } from 'react-hook-form';

export const useMovieTextInput = (name: string) => {
  const { register } = useFormContext();
  const { errors } = useFormState({ name });

  return { register, errors: errors[name] };
};
