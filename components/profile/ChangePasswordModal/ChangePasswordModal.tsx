import { PasswordHint, PasswordInput, ProfileModalWrapper } from 'components';
import { SetState } from 'types';
import { useChangePasswordModal } from './useChangePasswordModal';

const ChangePasswordModal = (props: {
  setPasswordModalIsOpen: SetState<boolean>;
}) => {
  const { isLoading, handleSubmit, closeModalCallback, t } =
    useChangePasswordModal(props.setPasswordModalIsOpen);

  return (
    <ProfileModalWrapper
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      closeModalCallback={closeModalCallback}
    >
      <PasswordHint />
      <div className='mb-4'>
        <PasswordInput
          name='password'
          label={t('new_password')}
          placeholder={t('new_password')}
          isBig={true}
        />
      </div>

      <PasswordInput
        name='password_confirmation'
        label={t('confirm_new_password')}
        placeholder={t('confirm_new_password')}
        isBig={true}
      />
    </ProfileModalWrapper>
  );
};

export default ChangePasswordModal;
