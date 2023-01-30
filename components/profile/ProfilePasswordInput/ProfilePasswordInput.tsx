import { PasswordEye, PasswordEyeCrossed, ProfileInput } from 'components';
import { PropsType } from './types';

const ProfilePasswordInput = (props: PropsType) => {
  return (
    <ProfileInput
      {...props}
      type={props.isHidden ? 'password' : 'text'}
      isActive={true}
      validationRules={props.validationRules}
    >
      <button
        type='button'
        tabIndex={-1}
        className='absolute top-0 right-12 h-12 lg:right-18 flex items-center'
        onClick={props.toggleIsHidden}
      >
        {props.isHidden ? <PasswordEyeCrossed /> : <PasswordEye />}
      </button>
    </ProfileInput>
  );
};

export default ProfilePasswordInput;
