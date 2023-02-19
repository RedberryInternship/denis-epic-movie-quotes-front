import {
  InputSideButton,
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
  const { passwordIsHidden, togglePasswordIsHidden, t } =
    useProfilePasswordSection();

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
          <div className='h-[134px] p-6 border-[#373741] rounded border mb-4 lg:w-1/2 lg:max-w-[528px] mt-2'>
            {t('password_should_contain')}:
            <div className='text-sm mt-4 mb-1'>
              <span className='mr-1.5'>•</span>
              {t('min_8')}
            </div>
            <div className='text-sm'>
              <span className='mr-1.5'>•</span>
              {t('max_15')}
            </div>
          </div>
          <ProfilePasswordInput
            name='password'
            label={t('new_password')}
            placeholder={t('new_password')}
            isHidden={passwordIsHidden}
            toggleIsHidden={togglePasswordIsHidden}
          />
          <ProfilePasswordInput
            name='password_confirmation'
            label={t('confirm_new_password')}
            placeholder={t('confirm_new_password')}
            isHidden={passwordIsHidden}
            toggleIsHidden={togglePasswordIsHidden}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePasswordSection;
