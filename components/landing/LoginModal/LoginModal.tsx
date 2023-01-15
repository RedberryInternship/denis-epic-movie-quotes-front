import {
  Form,
  FormSubmitButton,
  GoogleAuthButton,
  ModalWrapper,
  NavButton,
  TextInput,
  PasswordInput,
} from 'components';
import { useLoginModal } from './useLoginModal';
import { Modals, SetState } from 'types';

const LoginModal = (props: { setActiveModal: SetState<Modals> }) => {
  const {
    handleSubmit,
    register,
    isLoading,
    passwordIsHidden,
    togglePasswordIsHidden,
  } = useLoginModal();

  return (
    <ModalWrapper
      title='Log in to your account'
      subtitle='Welcome back! Please enter your details.'
      closeModalCallback={() => props.setActiveModal('')}
    >
      <Form onSubmit={handleSubmit}>
        <TextInput
          name='username'
          label='Email'
          placeholder='Enter your username or email'
          validationRules={{
            required: 'Please enter your username or email',
            minLength: {
              value: 3,
              message: 'This field should contain at least 3 characters',
            },
          }}
        />
        <PasswordInput
          name='password'
          label='Password'
          placeholder='Password'
          validationRules={{
            required: 'Please enter your password',
          }}
          isHidden={passwordIsHidden}
          toggleIsHidden={togglePasswordIsHidden}
        />
        <div className='flex items-center justify-start w-full gap-2 mb-3'>
          <input
            type='checkbox'
            id='remember_me'
            {...register('remember_me')}
            className='rounded'
          />
          <label htmlFor='remember_me'>Remember me</label>
          <NavButton
            label='Forgot password?'
            classNames='ml-auto'
            onClick={() => props.setActiveModal('forgot_pass')}
          />
        </div>
        <FormSubmitButton label='Sign in' isLoading={isLoading} />
        <GoogleAuthButton label='Sign in with Google' />
        <span className='mt-5 mb-10 lg:mb-0 text-brand-subtitle'>
          Don&apos;t have an account?
          <NavButton
            label='Sign up'
            classNames='ml-2 '
            onClick={() => props.setActiveModal('register')}
          />
        </span>
      </Form>
    </ModalWrapper>
  );
};

export default LoginModal;
