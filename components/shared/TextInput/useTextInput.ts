import { useFormContext } from 'react-hook-form';
import { useInputStatusAndClassnames } from 'hooks';

export const useTextInput = (name: string) => {
  const { register } = useFormContext();
  const { inputError, inputIsValid, inputClassNames } =
    useInputStatusAndClassnames(name);

  return { register, inputError, inputIsValid, inputClassNames };
};
