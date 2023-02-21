import { PasswordEye, PasswordEyeCrossed, TextInput } from 'components';
import { PropsType } from './types';
import { useToggle } from 'hooks';

const PasswordInput = (props: PropsType) => {
  const [isHidden, toggleIsHidden] = useToggle(true);

  return (
    <div className='relative w-full'>
      <TextInput {...props} type={isHidden ? 'password' : 'text'} />
      <button
        type='button'
        tabIndex={-1}
        className={
          'absolute top-8 right-12 h-9.5 lg:right-12 flex items-center ' +
          (props.isBig ? 'h-12' : 'h-9.5')
        }
        onClick={toggleIsHidden}
      >
        {isHidden ? <PasswordEyeCrossed /> : <PasswordEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
