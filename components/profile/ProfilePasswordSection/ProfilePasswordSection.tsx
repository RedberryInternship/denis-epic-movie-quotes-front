import {
  InputSideButton,
  ProfileInput,
  ProfilePasswordInput,
} from 'components';
import { SetState } from 'types';
import { useToggle } from 'hooks';

const ProfilePasswordSection = (props: {
  isEditingPassword: boolean;
  setIsEditingPassword: SetState<boolean>;
  setPasswordModalIsOpen: SetState<boolean>;
}) => {
  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);

  return (
    <div>
      <ProfileInput
        type='password'
        label={props.isEditingPassword ? 'Current password' : 'Password'}
        name='current_password'
        placeholder={
          props.isEditingPassword ? 'Current Password' : '••••••••••••'
        }
        isActive={props.isEditingPassword}
        sideButtons={
          <>
            <div className='hidden lg:flex'>
              <InputSideButton
                label='Edit'
                onClick={() => props.setIsEditingPassword(true)}
              />
            </div>
            <div className='flex lg:hidden'>
              <InputSideButton
                label='Edit'
                onClick={() => props.setPasswordModalIsOpen(true)}
              />
            </div>
          </>
        }
      />

      {props.isEditingPassword && (
        <div className='hidden lg:block'>
          <div className='h-[134px] p-6 border-[#373741] rounded border mb-4 lg:w-1/2 lg:max-w-[528px] mt-2'>
            Password should contain:
            <div className='text-sm mt-4 mb-1'>
              <span className='mr-1.5'>•</span>At least 8 characters
            </div>
            <div className='text-sm'>
              <span className='mr-1.5'>•</span>Less than 16 characters
            </div>
          </div>
          <ProfilePasswordInput
            name='password'
            label='New password'
            placeholder='New password'
            isHidden={passwordIsHidden}
            toggleIsHidden={togglePasswordIsHidden}
          />
          <ProfilePasswordInput
            name='password_confirmation'
            label='Confirm new password'
            placeholder='Confirm new password'
            isHidden={passwordIsHidden}
            toggleIsHidden={togglePasswordIsHidden}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePasswordSection;
