import { useFormContext, useFormState } from 'react-hook-form';

export const useTextAreaWithLanguage = (name: string) => {
  const { register } = useFormContext();
  const { errors } = useFormState({ name });

  return { register, hasErrors: errors[name] };
};
