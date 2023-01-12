import {
  BackToLogin,
  Form,
  FormSubmitButton,
  ModalWrapper,
  PasswordInput,
} from 'components';
import { Modals, SetState } from 'types';
import { useResetPasswordModal } from './useResetPasswordModal';

const ResetPasswordModal = (props: { setActiveModal: SetState<Modals> }) => {
  const {
    handleSubmit,
    isLoading,
    validationRules,
    validatePasswordConfirmation,
    passwordIsHidden,
    togglePasswordIsHidden,
  } = useResetPasswordModal(props.setActiveModal);

  return (
    <ModalWrapper
      title='Create new password'
      subtitle='Regain access to your account'
      closeModalCallback={() => props.setActiveModal('')}
    >
      <Form onSubmit={handleSubmit}>
        <PasswordInput
          name='password'
          label='Password'
          placeholder='At least 8 & max.15 lower case characters'
          requiredAsterisk={true}
          validationRules={validationRules.password}
          onChange={validatePasswordConfirmation}
          isHidden={passwordIsHidden}
          toggleIsHidden={togglePasswordIsHidden}
        />
        <PasswordInput
          name='password_confirmation'
          label='Current Password'
          placeholder='Password'
          requiredAsterisk={true}
          validationRules={validationRules.password_confirmation}
          isHidden={passwordIsHidden}
          toggleIsHidden={togglePasswordIsHidden}
        />
        <FormSubmitButton label='Reset password' isLoading={isLoading} />
        <BackToLogin setActiveModal={props.setActiveModal} />
      </Form>
    </ModalWrapper>
  );
};

export default ResetPasswordModal;
