import {
  ArrowLeft,
  FormSubmitButton,
  ModalWrapper,
  TextInput,
} from 'components';
import { Modals, SetState } from 'types';

const ForgotPasswordModal = (props: { setActiveModal: SetState<Modals> }) => {
  return (
    <ModalWrapper
      title='Forgot password?'
      subtitle='Enter the email and we’ll send an email with instructions to reset your password'
      headingIsBig={true}
      closeModalCallback={() => props.setActiveModal('')}
    >
      <form className='flex flex-col w-full items-center'>
        <TextInput name='email' label='Email' placeholder='Enter your email' />
        <FormSubmitButton label='Send instructions' isLoading={false} />
        <button
          type='button'
          className='mt-6 flex gap-3 items-center text-brand-subtitle'
          onClick={() => props.setActiveModal('login')}
        >
          <ArrowLeft /> Back to log in
        </button>
      </form>
    </ModalWrapper>
  );
};

export default ForgotPasswordModal;
