import { useMovieTextInput } from './useMovieTextInput';
import { FormError } from 'components';
import { PropsType } from './types';

const MovieTextInput = (props: PropsType) => {
  const { register, errors } = useMovieTextInput(props.name);

  return (
    <>
      <input
        {...register(props.name, {
          required: true,
          ...props.validationRules,
        })}
        className={
          'h-12 border border-brand-subtitle bg-transparent rounded px-[17px] w-full mb-4 lg:mb-5 placeholder:text-[#CCC] focus:outline-[#A9B4BE] focus:outline-[#A9B4BE] focus:ring-[#A9B4BE] focus:ring-offset-0 focus:outline-offset-0 focus:outline-4 focus:border-brand-subtitle ' +
          (errors
            ? '!border-brand-red border-1.5 focus:border-1.5 focus:border-brand-red'
            : '')
        }
        placeholder={props.placeholder}
      />
      {props.displayErrors && errors?.message && (
        <div className='-mt-3 mb-4'>
          <FormError error={errors?.message as string} />
        </div>
      )}
    </>
  );
};

export default MovieTextInput;
