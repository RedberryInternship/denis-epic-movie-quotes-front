import { useFormContext, useFormState } from 'react-hook-form';

export const useTextInput = (name: string) => {
  const { register } = useFormContext();
  const { errors, dirtyFields } = useFormState({ name });

  const inputError = dirtyFields[name] && errors[name]?.message;
  const inputIsValid = dirtyFields[name] && !inputError;

  const inputClassNames =
    'w-full h-9.5 pl-3.5 pr-18 lg:pr-3.5 bg-brand-pale text-black placeholder:text-brand-subtitle rounded ' +
    (inputError
      ? 'border-brand-red border-1.5 focus:border-1.5 focus:border-brand-red '
      : '') +
    (inputIsValid
      ? 'border-brand-green border-1.5 focus:border-1.5 focus:border-brand-green '
      : '') +
    (!inputIsValid && !inputError ? 'focus:border-0 ' : '') +
    'focus:outline-[#A9B4BE] focus:ring-[#A9B4BE] focus:ring-offset-0 focus:outline-offset-0 focus:outline-4';

  return { register, inputError, inputIsValid, inputClassNames };
};
