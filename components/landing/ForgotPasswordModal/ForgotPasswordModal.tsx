import {
  Form,
  FormSubmitButton,
  ModalWrapper,
  TextInput,
  BackToLogin,
} from 'components';
import { Modals, SetState } from 'types';
import { useForgotPasswordModal } from './useForgotPasswordModal';

const ForgotPasswordModal = (props: { setActiveModal: SetState<Modals> }) => {
  const { handleSubmit, isLoading, t } = useForgotPasswordModal(
    props.setActiveModal
  );

  return (
    <ModalWrapper
      title={t('forgot_title')}
      subtitle={t('forgot_description')}
      headingIsBig={true}
      closeModalCallback={() => props.setActiveModal('')}
    >
      <Form onSubmit={handleSubmit}>
        <TextInput
          name='email'
          label={t('email')}
          placeholder={t('email_placeholder')}
          validationRules={{
            required: t('email_required'),
            pattern: {
              value: /^(.+)@(.+)$/,
              message: t('email_invalid'),
            },
          }}
        />
        <FormSubmitButton label={t('forgot_submit')} isLoading={isLoading} />
        <BackToLogin setActiveModal={props.setActiveModal} />
      </Form>
    </ModalWrapper>
  );
};

export default ForgotPasswordModal;
