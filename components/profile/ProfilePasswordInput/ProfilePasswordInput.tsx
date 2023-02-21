import { PasswordEye, PasswordEyeCrossed, ProfileInput } from 'components';
import { PropsType } from './types';
import { useToggle } from 'hooks';

const ProfilePasswordInput = (props: PropsType) => {
  const [isHidden, toggleIsHidden] = useToggle(true);

  return (
    <ProfileInput
      {...props}
      type={isHidden ? 'password' : 'text'}
      isActive={true}
    >
      <button
        type='button'
        tabIndex={-1}
        className='absolute top-0 right-12 h-12 lg:right-18 flex items-center'
        onClick={toggleIsHidden}
      >
        {isHidden ? <PasswordEyeCrossed /> : <PasswordEye />}
      </button>
    </ProfileInput>
  );
};

export default ProfilePasswordInput;
