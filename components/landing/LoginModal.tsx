import {
  FormSubmitButton,
  GoogleAuthButton,
  ModalWrapper,
  TextInput,
} from 'components';
import { Dispatch, SetStateAction } from 'react';

const LoginModal = (props: {
  setLoginIsOpen: Dispatch<SetStateAction<boolean>>;
  setRegisterIsOpen: Dispatch<SetStateAction<boolean>>;
  setForgotPassIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ModalWrapper
      title='Log in to your account'
      subtitle='Welcome back! Please enter your details.'
      closeModalCallback={() => props.setLoginIsOpen(false)}
    >
      <form className='w-full flex flex-col items-center gap-1'>
        <TextInput name='email' label='Email' placeholder='Enter your email' />
        <TextInput name='password' label='Password' placeholder='Password' />
        <div className='flex items-center justify-start w-full gap-2 mb-3'>
          <input
            type='checkbox'
            id='remember_me'
            name='remember_me'
            className='rounded'
          />
          <label htmlFor='remember_me'>Remember me</label>
          <button
            type='button'
            className='ml-auto underline text-brand-blue hover:text-blue-800'
            onClick={() => {
              props.setLoginIsOpen(false);
              props.setForgotPassIsOpen(true);
            }}
          >
            Forgot password?
          </button>
        </div>
        <FormSubmitButton label='Sign in' />
        <GoogleAuthButton label='Sign in with Google' />
        <span className='mt-5 mb-10 lg:mb-0 text-brand-subtitle'>
          Don&apos;t have an account?
          <button
            className='ml-2 underline text-brand-blue hover:text-blue-800'
            type='button'
            onClick={() => {
              props.setLoginIsOpen(false);
              props.setRegisterIsOpen(true);
            }}
          >
            Sign up
          </button>
        </span>
      </form>
    </ModalWrapper>
  );
};

export default LoginModal;
