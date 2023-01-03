import {
  ArrowLeft,
  FormSubmitButton,
  ModalWrapper,
  TextInput,
} from 'components';
import { Dispatch, SetStateAction } from 'react';

const ForgotPasswordModal = (props: {
  setLoginIsOpen: Dispatch<SetStateAction<boolean>>;
  setForgotPassIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ModalWrapper
      title='Forgot password?'
      subtitle='Enter the email and we’ll send an email with instructions to reset your password'
      headingIsBig={true}
      closeModalCallback={() => props.setForgotPassIsOpen(false)}
    >
      <form className='flex flex-col w-full items-center'>
        <TextInput name='email' label='Email' placeholder='Enter your email' />
        <FormSubmitButton label='Send instructions' />
        <button
          type='button'
          className='mt-6 flex gap-3 items-center text-brand-subtitle'
          onClick={() => {
            props.setForgotPassIsOpen(false);
            props.setLoginIsOpen(true);
          }}
        >
          <ArrowLeft /> Back to log in
        </button>
      </form>
    </ModalWrapper>
  );
};

export default ForgotPasswordModal;
