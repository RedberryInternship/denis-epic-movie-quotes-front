import { useFormContext } from 'react-hook-form';
import { useInputStatusAndClassnames } from 'hooks';

export const useProfileInput = (name: string) => {
  const { register } = useFormContext();

  const { inputClassNames, inputIsValid, inputError } =
    useInputStatusAndClassnames(name);

  return {
    register,
    inputClassNames,
    inputIsValid,
    inputError,
  };
};
