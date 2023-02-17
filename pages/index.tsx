import Head from 'next/head';
import {
  EmailSent,
  FeaturedQuote,
  ForgotPasswordModal,
  FormWrapper,
  HeaderTitle,
  LanguageSelector,
  LoginModal,
  ModalButton,
  ModalSuccess,
  RedButton,
  RegisterModal,
  ResetPasswordModal,
  SplashModalWrapper,
} from 'components';
import { useIndexPage } from 'hooks';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Changing absolute imports below to relative imports will fix the app
import {
  forgotSchema,
  loginSchema,
  passwordWithConfirmationSchema,
  registerSchema,
} from 'schema';

const Landing = () => {
  const {
    activeModal,
    setActiveModal,
    errorSplashMessage,
    setErrorSplashMessage,
    t,
  } = useIndexPage();

  return (
    <>
      <Head>
        <title>Movie Quotes</title>
      </Head>

      {errorSplashMessage && (
        <SplashModalWrapper
          title={t('common:error_occurred')}
          subtitle={errorSplashMessage}
          closeModalCallback={() => setErrorSplashMessage('')}
        />
      )}

      {activeModal === 'login' && (
        <FormWrapper schema={loginSchema}>
          <LoginModal setActiveModal={setActiveModal} />
        </FormWrapper>
      )}

      {activeModal === 'register' && (
        <FormWrapper schema={registerSchema}>
          <RegisterModal setActiveModal={setActiveModal} />
        </FormWrapper>
      )}

      {activeModal === 'forgot_pass' && (
        <FormWrapper schema={forgotSchema}>
          <ForgotPasswordModal setActiveModal={setActiveModal} />
        </FormWrapper>
      )}

      {activeModal === 'password_sent' && (
        <SplashModalWrapper
          iconComponent={<EmailSent />}
          title={t('auth:check_email')}
          subtitle={t('auth:reset_sent')}
          closeModalCallback={() => setActiveModal('')}
        />
      )}

      {activeModal === 'reset_pass' && (
        <FormWrapper schema={passwordWithConfirmationSchema}>
          <ResetPasswordModal setActiveModal={setActiveModal} />
        </FormWrapper>
      )}

      {activeModal === 'confirm_sent' && (
        <SplashModalWrapper
          iconComponent={<EmailSent />}
          title={t('common:thanks')}
          subtitle={t('auth:confirm_sent')}
          closeModalCallback={() => setActiveModal('')}
        />
      )}

      {activeModal === 'verified' && (
        <SplashModalWrapper
          iconComponent={<ModalSuccess />}
          title={t('common:thanks')}
          subtitle={t('auth:account_activated')}
          closeModalCallback={() => setActiveModal('')}
        >
          <div className='w-1/2 lg:w-full'>
            <ModalButton
              label={t('auth:login')}
              onClick={() => setActiveModal('login')}
            />
          </div>
        </SplashModalWrapper>
      )}

      {activeModal === 'password_changed' && (
        <SplashModalWrapper
          iconComponent={<ModalSuccess />}
          title={t('common:password_success')}
          subtitle={t('auth:password_changed')}
          closeModalCallback={() => setActiveModal('')}
        >
          <div className='w-1/2 lg:w-full'>
            <ModalButton
              label={t('auth:login')}
              onClick={() => setActiveModal('login')}
            />
          </div>
        </SplashModalWrapper>
      )}

      <nav
        className={
          'items-center w-full text-white justify-between px-9 py-6 lg:px-20 fixed z-50 ' +
          (activeModal || errorSplashMessage
            ? 'hidden blur-sm pointer-events-none lg:flex'
            : 'flex')
        }
      >
        <HeaderTitle />
        <div className='flex gap-4'>
          <LanguageSelector />
          <button
            className='h-9.5 px-6 bg-brand-red rounded hidden lg:inline-block'
            onClick={() => setActiveModal('register')}
          >
            {t('auth:register')}
          </button>
          <button
            className='h-9.5 px-6.5 border border-white rounded'
            onClick={() => setActiveModal('login')}
          >
            {t('auth:login')}
          </button>
        </div>
      </nav>

      <main
        className={
          'w-full bg-brand-background text-white snap-y ' +
          (activeModal || errorSplashMessage ? 'blur-sm' : '')
        }
      >
        <div className='snap-start snap-mandatory h-[66vh] w-2/3 flex flex-col items-center pt-[16vh] lg:pt-[26vh] lg:w-1/2 2xl:w-5/12 mx-auto gap-8 lg:h-screen lg:gap-6'>
          <h1 className='text-brand-khaki font-bold text-2xl leading-normal text-center lg:text-5xl 2xl:text-6xl lg:leading-normal 2xl:leading-normal'>
            {t('landing:heading')}
          </h1>
          <RedButton
            onClick={() => setActiveModal('register')}
            label={t('auth:get_started')}
            classNames='px-3.5 lg:px-4'
          />
        </div>
        <FeaturedQuote
          backgroundClass='bg-[url("/assets/interstellar.png")]'
          quote={t('interstellar_quote')}
          caption='Interstellar, 2014'
        />
        <FeaturedQuote
          backgroundClass='bg-[url("/assets/the-royal-tenendaums.png")]'
          quote={t('tenenbaums_quote')}
          caption='The Royal Tenenbaums, 2001'
        />
        <FeaturedQuote
          backgroundClass='bg-[url("/assets/lord-of-the-rings.png")]'
          quote={t('lotr_quote')}
          caption='The Lord of the Rings, 2003'
        />
        <footer className='snap-center flex items-center h-8 px-8.5 uppercase font-medium text-2xs text-brand-khaki lg:text-xs lg:h-12 lg:px-17.5'>
          © 2022 movie quotes. {t('copyright')}.
        </footer>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'landing',
      'common',
      'auth',
      'validation',
    ])),
  },
});

export default Landing;
