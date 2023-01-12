import { PasswordEye, PasswordEyeCrossed, TextInput } from 'components';
import { PropsType } from './types';

const PasswordInput = (props: PropsType) => {
  return (
    <div className='relative w-full'>
      <TextInput {...props} type={props.isHidden ? 'password' : 'text'} />
      <button
        type='button'
        tabIndex={-1}
        className='absolute top-8 right-12 h-9.5 lg:right-12 flex items-center'
        onClick={props.toggleIsHidden}
      >
        {props.isHidden ? <PasswordEyeCrossed /> : <PasswordEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
