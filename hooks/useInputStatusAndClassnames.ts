import { useFormState } from 'react-hook-form';

export const useInputStatusAndClassnames = (name: string) => {
  const { errors, dirtyFields } = useFormState({ name });

  const inputError = errors[name]?.message;
  const inputIsValid = dirtyFields[name] && !inputError;

  const inputClassNames =
    ' focus:outline-[#A9B4BE] focus:ring-[#A9B4BE] focus:ring-offset-0 focus:outline-offset-0 focus:outline-4 ' +
    (inputError
      ? ' border-brand-red border-1.5 focus:border-1.5 focus:border-brand-red '
      : '') +
    (inputIsValid
      ? ' border-brand-green border-1.5 focus:border-1.5 focus:border-brand-green '
      : '') +
    (!inputIsValid && !inputError ? ' focus:border-0 ' : '');

  return { inputError, inputIsValid, inputClassNames };
};
