import { InputSideButton, ProfileInput } from 'components';
import { useProfileUsernameSection } from './useProfileUsernameSection';
import { PropsType } from './types';

const ProfileUsernameSection = (props: PropsType) => {
  const { t } = useProfileUsernameSection(props.username);
  return (
    <ProfileInput
      label={t('username')}
      name='username'
      placeholder={t('username') as string}
      isActive={props.isEditingUsername}
      sideButtons={
        <>
          <div className='hidden lg:flex'>
            <InputSideButton
              label={t('edit')}
              onClick={() => props.setIsEditingUsername(true)}
            />
          </div>
          <div className='flex lg:hidden'>
            <InputSideButton
              label={t('edit')}
              onClick={() => props.setUsernameModalIsOpen(true)}
            />
          </div>
        </>
      }
    />
  );
};

export default ProfileUsernameSection;
