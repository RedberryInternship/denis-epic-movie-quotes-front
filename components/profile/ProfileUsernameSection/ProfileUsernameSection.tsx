import { InputSideButton, ProfileInput } from 'components';
import { useProfileUsernameSection } from './useProfileUsernameSection';
import { PropsType } from './types';

const ProfileUsernameSection = (props: PropsType) => {
  useProfileUsernameSection(props.username);
  return (
    <ProfileInput
      label='Username'
      name='username'
      placeholder='Username'
      isActive={props.isEditingUsername}
      sideButtons={
        <>
          <div className='hidden lg:flex'>
            <InputSideButton
              label='Edit'
              onClick={() => props.setIsEditingUsername(true)}
            />
          </div>
          <div className='flex lg:hidden'>
            <InputSideButton label='Edit' />
          </div>
        </>
      }
    />
  );
};

export default ProfileUsernameSection;
