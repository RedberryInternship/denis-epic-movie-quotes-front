import {
  Form,
  FormSubmitButton,
  GoogleAuthButton,
  ModalWrapper,
  NavButton,
  TextInput,
} from 'components';
import { useRegisterModal } from './useRegisterModal';
import { Modals, SetState } from 'types';

const RegisterModal = (props: { setActiveModal: SetState<Modals> }) => {
  const {
    handleSubmit,
    onSubmit,
    isLoading,
    validationRules,
    validatePasswordConfirmation,
  } = useRegisterModal(() => props.setActiveModal('confirm_sent'));

  return (
    <ModalWrapper
      title='Create an account'
      subtitle='Start your journey!'
      closeModalCallback={() => props.setActiveModal('')}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name='username'
          label='Name'
          placeholder='At least 3 & max.15 lower case characters'
          requiredAsterisk={true}
          validationRules={validationRules.username}
        />
        <TextInput
          name='email'
          label='Email'
          placeholder='Enter your email'
          requiredAsterisk={true}
          validationRules={validationRules.email}
        />
        <TextInput
          type='password'
          name='password'
          label='Password'
          placeholder='At least 8 & max.15 lower case characters'
          requiredAsterisk={true}
          validationRules={validationRules.password}
          onChange={validatePasswordConfirmation}
        />
        <TextInput
          type='password'
          name='password_confirmation'
          label='Current Password'
          placeholder='Password'
          requiredAsterisk={true}
          validationRules={validationRules.password_confirmation}
        />
        <FormSubmitButton label='Get started' isLoading={isLoading} />
        <GoogleAuthButton label='Sign up with Google' />
        <span className='mt-5 mb-10 lg:mb-0 text-brand-subtitle'>
          Already have an account?
          <NavButton
            label='Log in'
            classNames='ml-2'
            onClick={() => props.setActiveModal('login')}
          />
        </span>
      </Form>
    </ModalWrapper>
  );
};

export default RegisterModal;
