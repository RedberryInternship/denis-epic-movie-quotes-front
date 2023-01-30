import { FormError, InputValidityIcon } from 'components';
import { PropsType } from './types';
import { useProfileInput } from './useProfileInput';

const ProfileInput = (props: PropsType) => {
  const { register, inputIsValid, inputError, inputClassNames } =
    useProfileInput(props.name);

  return (
    <div className='pb-4 mb-8 lg:mb-0 lg:pb-2 border-brand-divide border-b lg:border-0'>
      <label htmlFor={props.name}>{props.label}</label>
      <div className='flex justify-between text-lg lg:text-xl mt-1 lg:justify-start lg:gap-8 lg:mt-2'>
        <div className='relative lg:w-1/2 lg:max-w-[528px]'>
          <input
            {...(!props.value &&
              register(props.name, {
                ...props.validationRules,
                ...{ onChange: props.onChange },
              }))}
            disabled={!props.isActive}
            id={props.name}
            type={props.type || 'text'}
            value={props.value}
            placeholder={props.placeholder}
            className={
              'text-lg lg:text-xl p-0 border-0 bg-transparent lg:w-full lg:rounded lg:bg-brand-pale lg:disabled:bg-[#A6AAB2] lg:text-black lg:pl-4.5 lg:h-12 lg:flex lg:items-center ' +
              inputClassNames +
              props.additionalClassNames
            }
          />
          <InputValidityIcon isValid={inputIsValid} isInvalid={inputError} />
          {props.children}
        </div>
        {props.sideButtons}
      </div>
      <div className='hidden lg:block mt-1'>
        <FormError error={inputError || ''} />
      </div>
    </div>
  );
};

export default ProfileInput;
