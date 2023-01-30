import { FormError, InputValidityIcon } from 'components';
import { useTextInput } from './useTextInput';
import { PropsType } from './types';

const TextInput = (props: PropsType) => {
  const { register, inputIsValid, inputError, inputClassNames } = useTextInput(
    props.name
  );

  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={props.name} className='mb-2 h-6'>
        {props.label}
        {props.requiredAsterisk && (
          <span className='text-brand-crimson'>*</span>
        )}
      </label>
      <div className='relative mb-1'>
        <input
          {...register(props.name, {
            ...props.validationRules,
            ...{ onChange: props.onChange },
          })}
          id={props.name}
          placeholder={props.placeholder}
          type={props.type || 'text'}
          className={
            'w-full pl-3.5 pr-18 lg:pr-18 bg-brand-pale text-black placeholder:text-brand-subtitle rounded ' +
            inputClassNames +
            (props.isBig ? 'h-12' : 'h-9.5')
          }
        />
        <InputValidityIcon isValid={inputIsValid} isInvalid={inputError} />
      </div>

      <FormError error={(inputError || '') as string} />
    </div>
  );
};

export default TextInput;
