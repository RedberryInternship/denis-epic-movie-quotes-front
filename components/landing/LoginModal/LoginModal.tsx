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
    t,
  } = useLoginModal();

  return (
    <ModalWrapper
      title={t('login_title')}
      subtitle={t('login_description')}
      closeModalCallback={() => props.setActiveModal('')}
    >
      <Form onSubmit={handleSubmit}>
        <TextInput
          name='username'
          label={t('email')}
          placeholder={t('credentials_placeholder')}
        />
        <PasswordInput
          name='password'
          label={t('password')}
          placeholder={t('password')}
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
          <label htmlFor='remember_me'>{t('remember')}</label>
          <NavButton
            label={t('forgot_title')}
            classNames='ml-auto'
            onClick={() => props.setActiveModal('forgot_pass')}
          />
        </div>
        <FormSubmitButton label={t('sign_in')} isLoading={isLoading} />
        <GoogleAuthButton label={t('google_login')} />
        <span className='mt-5 mb-10 lg:mb-0 text-brand-subtitle'>
          {t('register_suggestion')}
          <NavButton
            label={t('register')}
            classNames='ml-2 '
            onClick={() => props.setActiveModal('register')}
          />
        </span>
      </Form>
    </ModalWrapper>
  );
};

export default LoginModal;
