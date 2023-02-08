import { useFormContext, useFormState } from 'react-hook-form';
import { useLanguageValidator } from 'hooks';

export const useTextAreaWithLanguage = (
  name: string,
  language: 'Eng' | 'ქარ'
) => {
  const { register } = useFormContext();
  const { errors } = useFormState({ name });

  const languageValidator = useLanguageValidator(language);

  return { register, errors: errors[name], languageValidator };
};
