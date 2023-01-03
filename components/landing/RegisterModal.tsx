import {
  FormSubmitButton,
  GoogleAuthButton,
  ModalWrapper,
  TextInput,
} from 'components';
import { Dispatch, SetStateAction } from 'react';

const RegisterModal = (props: {
  setLoginIsOpen: Dispatch<SetStateAction<boolean>>;
  setRegisterIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ModalWrapper
      title='Create an account'
      subtitle='Start your journey!'
      closeModalCallback={() => props.setRegisterIsOpen(false)}
    >
      <form className='w-full flex flex-col items-center gap-1'>
        <TextInput
          name='name'
          label='Name'
          placeholder='At least 3 & max.15 lower case characters'
          requiredAsterisk={true}
        />
        <TextInput
          name='email'
          label='Email'
          placeholder='Enter your email'
          requiredAsterisk={true}
        />
        <TextInput
          name='password'
          label='Password'
          placeholder='At least 8 & max.15 lower case characters'
          requiredAsterisk={true}
        />
        <TextInput
          name='password_confirmation'
          label='Current Password'
          placeholder='Password'
          requiredAsterisk={true}
        />
        <FormSubmitButton label='Get started' />
        <GoogleAuthButton label='Sign up with Google' />
        <span className='mt-5 mb-10 lg:mb-0 text-brand-subtitle'>
          Already have an account?
          <button
            className='ml-2 underline text-brand-blue hover:text-blue-800'
            type='button'
            onClick={() => {
              props.setRegisterIsOpen(false);
              props.setLoginIsOpen(true);
            }}
          >
            Log in
          </button>
        </span>
      </form>
    </ModalWrapper>
  );
};

export default RegisterModal;
