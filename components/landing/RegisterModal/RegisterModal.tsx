import {
  Form,
  FormSubmitButton,
  GoogleAuthButton,
  ModalWrapper,
  TextInput,
} from 'components/index';
import { Dispatch, SetStateAction } from 'react';
import { useRegisterModal } from './useRegisterModal';

const RegisterModal = (props: {
  setLoginIsOpen: Dispatch<SetStateAction<boolean>>;
  setRegisterIsOpen: Dispatch<SetStateAction<boolean>>;
  setConfirmationSplashIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    handleSubmit,
    onSubmit,
    isLoading,
    passwordValue,
    passwordConfirmationValue,
    setError,
    clearErrors,
  } = useRegisterModal(
    () => props.setConfirmationSplashIsOpen(true),
    () => props.setRegisterIsOpen(false)
  );

  return (
    <ModalWrapper
      title='Create an account'
      subtitle='Start your journey!'
      closeModalCallback={() => props.setRegisterIsOpen(false)}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name='username'
          label='Name'
          placeholder='At least 3 & max.15 lower case characters'
          requiredAsterisk={true}
          validationRules={{
            required: 'Please enter a username',
            minLength: {
              value: 3,
              message: 'This field should contain at least 3 characters',
            },
            maxLength: {
              value: 15,
              message: 'This field should contain less than 16 characters',
            },
            pattern: {
              value: /^[a-z0-9_\-]+$/,
              message:
                'The username can only contain lowercase characters and numbers',
            },
          }}
        />
        <TextInput
          name='email'
          label='Email'
          placeholder='Enter your email'
          requiredAsterisk={true}
          validationRules={{
            required: 'Please enter an email',
            pattern: {
              value: /^(.+)@(.+)$/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <TextInput
          type='password'
          name='password'
          label='Password'
          placeholder='At least 8 & max.15 lower case characters'
          requiredAsterisk={true}
          validationRules={{
            required: 'Please enter a password',
            minLength: {
              value: 8,
              message: 'The password should contain at least 8 characters',
            },
            maxLength: {
              value: 15,
              message: 'This field should contain less than 16 characters',
            },
            pattern: {
              value: /^[a-z0-9_\-]+$/,
              message:
                'The password can only contain lowercase characters and numbers',
            },
          }}
          onChange={async (e) => {
            if (e.target.value !== passwordConfirmationValue) {
              setError('password_confirmation', {
                type: 'custom',
                message: 'The passwords do not match',
              });
            } else {
              clearErrors('password_confirmation');
            }
          }}
        />
        <TextInput
          type='password'
          name='password_confirmation'
          label='Current Password'
          placeholder='Password'
          requiredAsterisk={true}
          validationRules={{
            required: 'Please confirm your password',
            validate: (value: string) =>
              value === passwordValue || 'The passwords do not match',
          }}
        />
        <FormSubmitButton label='Get started' isLoading={isLoading} />
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
      </Form>
    </ModalWrapper>
  );
};

export default RegisterModal;
