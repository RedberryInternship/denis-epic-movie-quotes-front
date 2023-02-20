import {
  InputSideButton,
  PasswordHint,
  ProfileInput,
  ProfilePasswordInput,
} from 'components';
import { SetState } from 'types';
import { useProfilePasswordSection } from './useProfilePasswordSection';

const ProfilePasswordSection = (props: {
  isEditingPassword: boolean;
  setIsEditingPassword: SetState<boolean>;
  setPasswordModalIsOpen: SetState<boolean>;
}) => {
  const { t } = useProfilePasswordSection();

  return (
    <div>
      <ProfileInput
        type='password'
        label={props.isEditingPassword ? t('current_password') : t('password')}
        name='current_password'
        placeholder={
          props.isEditingPassword
            ? (t('current_password') as string)
            : '••••••••••••'
        }
        isActive={props.isEditingPassword}
        sideButtons={
          <>
            <div className='hidden lg:flex'>
              <InputSideButton
                label={t('edit')}
                onClick={() => props.setIsEditingPassword(true)}
              />
            </div>
            <div className='flex lg:hidden'>
              <InputSideButton
                label={t('edit')}
                onClick={() => props.setPasswordModalIsOpen(true)}
              />
            </div>
          </>
        }
      />

      {props.isEditingPassword && (
        <div className='hidden lg:block'>
          <PasswordHint />
          <ProfilePasswordInput
            name='password'
            label={t('new_password')}
            placeholder={t('new_password')}
          />
          <ProfilePasswordInput
            name='password_confirmation'
            label={t('confirm_new_password')}
            placeholder={t('confirm_new_password')}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePasswordSection;
