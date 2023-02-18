import { PasswordInput, ProfileModalWrapper } from 'components';
import { SetState } from 'types';
import { useChangePasswordModal } from './useChangePasswordModal';

const ChangePasswordModal = (props: {
  setPasswordModalIsOpen: SetState<boolean>;
}) => {
  const {
    isLoading,
    handleSubmit,
    closeModalCallback,
    passwordIsHidden,
    togglePasswordIsHidden,
    passwordMinLengthValid,
    passwordMaxLengthValid,
    t,
  } = useChangePasswordModal(props.setPasswordModalIsOpen);

  return (
    <ProfileModalWrapper
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      closeModalCallback={closeModalCallback}
    >
      <div>
        <PasswordInput
          name='current_password'
          label={t('current_password')}
          placeholder={t('current_password')}
          isHidden={passwordIsHidden}
          toggleIsHidden={togglePasswordIsHidden}
          isBig={true}
        />
        <div className='h-[134px] bg-brand-article p-6 border-[#373741] rounded border mb-8 lg:mb-4 lg:w-1/2 lg:max-w-[528px] mt-2'>
          {t('password_should_contain')}:
          <div
            className={
              'text-sm mt-4 mb-1 ' +
              (passwordMinLengthValid ? 'text-white' : 'text-[#9C9A9A]')
            }
          >
            <span
              className={
                'mr-1.5 ' +
                (passwordMinLengthValid ? 'text-brand-green' : 'text-[#9C9A9A]')
              }
            >
              •
            </span>
            {t('min_8')}
          </div>
          <div
            className={
              'text-sm ' +
              (passwordMaxLengthValid ? 'text-white' : 'text-[#9C9A9A]')
            }
          >
            <span
              className={
                'mr-1.5 ' +
                (passwordMaxLengthValid ? 'text-brand-green' : 'text-[#9C9A9A]')
              }
            >
              •
            </span>
            {t('max_15')}
          </div>
        </div>
        <div className='mb-4'>
          <PasswordInput
            name='password'
            label={t('new_password')}
            placeholder={t('new_password')}
            isHidden={passwordIsHidden}
            toggleIsHidden={togglePasswordIsHidden}
            isBig={true}
          />
        </div>

        <PasswordInput
          name='password_confirmation'
          label={t('confirm_new_password')}
          placeholder={t('confirm_new_password')}
          isHidden={passwordIsHidden}
          toggleIsHidden={togglePasswordIsHidden}
          isBig={true}
        />
      </div>
    </ProfileModalWrapper>
  );
};

export default ChangePasswordModal;
