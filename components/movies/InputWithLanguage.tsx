import { MovieTextInput } from 'components';
import { useLanguageValidator } from 'hooks';

const InputWithLanguage = (props: {
  name: string;
  placeholder: string;
  language: 'Eng' | 'ქარ';
}) => {
  const languageValidator = useLanguageValidator(props.language);

  return (
    <div className='relative'>
      <MovieTextInput {...props} validationRules={languageValidator} />
      <span className='absolute h-12 flex items-center top-0 right-[17px] text-brand-subtitle'>
        {props.language}
      </span>
    </div>
  );
};

export default InputWithLanguage;
