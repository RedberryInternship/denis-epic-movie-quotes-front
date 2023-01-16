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
    t,
  } = useResetPasswordModal(props.setActiveModal);

  return (
    <ModalWrapper
      title={t('reset_pass_title')}
      subtitle={t('reset_pass_description')}
      closeModalCallback={() => props.setActiveModal('')}
    >
      <Form onSubmit={handleSubmit}>
        <PasswordInput
          name='password'
          label={t('password')}
          placeholder={t('password_placeholder')}
          requiredAsterisk={true}
          validationRules={validationRules.password}
          onChange={validatePasswordConfirmation}
          isHidden={passwordIsHidden}
          toggleIsHidden={togglePasswordIsHidden}
        />
        <PasswordInput
          name='password_confirmation'
          label={t('password_confirmation')}
          placeholder={t('password')}
          requiredAsterisk={true}
          validationRules={validationRules.password_confirmation}
          isHidden={passwordIsHidden}
          toggleIsHidden={togglePasswordIsHidden}
        />
        <FormSubmitButton
          label={t('reset_pass_submit')}
          isLoading={isLoading}
        />
        <BackToLogin setActiveModal={props.setActiveModal} />
      </Form>
    </ModalWrapper>
  );
};

export default ResetPasswordModal;
