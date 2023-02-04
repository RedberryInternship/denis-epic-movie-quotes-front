import { MovieTextInput } from 'components';

const InputWithLanguage = (props: {
  name: string;
  placeholder: string;
  language: 'Eng' | 'ქარ';
}) => {
  return (
    <div className='relative'>
      <MovieTextInput {...props} />
      <span className='absolute h-12 flex items-center top-0 right-[17px] text-brand-subtitle'>
        {props.language}
      </span>
    </div>
  );
};

export default InputWithLanguage;
