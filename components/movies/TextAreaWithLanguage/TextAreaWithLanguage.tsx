import { useTextAreaWithLanguage } from './useTextAreaWithLanguage';

const TextAreaWithLanguage = (props: {
  name: string;
  placeholder: string;
  language: 'Eng' | 'ქარ';
}) => {
  const { register, hasErrors } = useTextAreaWithLanguage(props.name);

  return (
    <div className='relative'>
      <textarea
        {...register(props.name, {
          required: true,
        })}
        className={
          'h-21.5 border border-brand-subtitle bg-transparent rounded px-[17px] w-full mb-4 lg:mb-5 placeholder:text-[#CCC] focus:outline-[#A9B4BE] focus:outline-[#A9B4BE] focus:ring-[#A9B4BE] focus:ring-offset-0 focus:outline-offset-0 focus:outline-4 focus:border-brand-subtitle ' +
          (hasErrors
            ? '!border-brand-red border-1.5 focus:border-1.5 focus:border-brand-red'
            : '')
        }
        placeholder={props.placeholder}
      ></textarea>
      <span className='absolute h-12 flex items-center top-0 right-[17px] text-brand-subtitle'>
        {props.language}
      </span>
    </div>
  );
};

export default TextAreaWithLanguage;
