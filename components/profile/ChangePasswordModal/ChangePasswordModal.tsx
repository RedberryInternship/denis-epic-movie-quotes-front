import { PasswordInput, ProfileModalWrapper } from 'components';
import { SetState } from 'types';
import { useChangePasswordModal } from './useChangePasswordModal';
import { validationRules } from './validationRules';

const ChangePasswordModal = (props: {
  setPasswordModalIsOpen: SetState<boolean>;
}) => {
  const {
    isLoading,
    handleSubmit,
    closeModalCallback,
    passwordIsHidden,
    togglePasswordIsHidden,
    validatePasswordConfirmation,
  } = useChangePasswordModal(props.setPasswordModalIsOpen);

  return (
    <ProfileModalWrapper
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      closeModalCallback={closeModalCallback}
    >
      <div>
        <div className='h-[134px] bg-brand-article p-6 border-[#373741] rounded border mb-8 lg:mb-4 lg:w-1/2 lg:max-w-[528px] mt-2'>
          Password should contain:
          <div className='text-sm mt-4 mb-1'>
            <span className='mr-1.5'>•</span>At least 8 characters
          </div>
          <div className='text-sm'>
            <span className='mr-1.5'>•</span>Less than 16 characters
          </div>
        </div>
        <div className='mb-4'>
          <PasswordInput
            name='password'
            label='New password'
            placeholder='New password'
            isHidden={passwordIsHidden}
            toggleIsHidden={togglePasswordIsHidden}
            onChange={validatePasswordConfirmation}
            validationRules={validationRules.password}
            isBig={true}
          />
        </div>

        <PasswordInput
          name='password_confirmation'
          label='Confirm new password'
          placeholder='Confirm new password'
          isHidden={passwordIsHidden}
          toggleIsHidden={togglePasswordIsHidden}
          validationRules={validationRules.password_confirmation}
          isBig={true}
        />
      </div>
    </ProfileModalWrapper>
  );
};

export default ChangePasswordModal;
