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
  const { handleSubmit, isLoading } = useForgotPasswordModal(
    props.setActiveModal
  );

  return (
    <ModalWrapper
      title='Forgot password?'
      subtitle='Enter the email and we’ll send an email with instructions to reset your password'
      headingIsBig={true}
      closeModalCallback={() => props.setActiveModal('')}
    >
      <Form onSubmit={handleSubmit}>
        <TextInput
          name='email'
          label='Email'
          placeholder='Enter your email'
          validationRules={{
            required: 'Please enter your email address',
            pattern: {
              value: /^(.+)@(.+)$/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FormSubmitButton label='Send instructions' isLoading={isLoading} />
        <BackToLogin setActiveModal={props.setActiveModal} />
      </Form>
    </ModalWrapper>
  );
};

export default ForgotPasswordModal;
