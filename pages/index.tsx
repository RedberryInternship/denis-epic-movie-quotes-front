import Head from 'next/head';
import {
  ArrowDown,
  EmailSent,
  FeaturedQuote,
  ForgotPasswordModal,
  FormWrapper,
  LoginModal,
  ModalButton,
  ModalSuccess,
  RegisterModal,
  SplashModalWrapper,
} from 'components';
import { useIndexPage } from 'hooks';

const Landing = () => {
  const {
    activeModal,
    setActiveModal,
    errorSplashMessage,
    setErrorSplashMessage,
  } = useIndexPage();

  return (
    <>
      <Head>
        <title>Movie Quotes</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      {errorSplashMessage && (
        <SplashModalWrapper
          title='Error'
          subtitle={errorSplashMessage}
          closeModalCallback={() => setErrorSplashMessage('')}
        />
      )}

      {activeModal === 'login' && (
        <FormWrapper>
          <LoginModal setActiveModal={setActiveModal} />
        </FormWrapper>
      )}

      {activeModal === 'register' && (
        <FormWrapper>
          <RegisterModal setActiveModal={setActiveModal} />
        </FormWrapper>
      )}

      {activeModal === 'forgot_pass' && (
        <FormWrapper>
          <ForgotPasswordModal setActiveModal={setActiveModal} />
        </FormWrapper>
      )}

      {activeModal === 'password_sent' && (
        <SplashModalWrapper
          iconComponent={<EmailSent />}
          title='Check your email'
          subtitle='We have sent password recovery instructions to your email'
          closeModalCallback={() => setActiveModal('')}
        />
      )}

      {activeModal === 'confirm_sent' && (
        <SplashModalWrapper
          iconComponent={<EmailSent />}
          title='Thank you!'
          subtitle='Please check your email and follow the instructions to activate your account.'
          closeModalCallback={() => setActiveModal('')}
        />
      )}

      {activeModal === 'verified' && (
        <SplashModalWrapper
          iconComponent={<ModalSuccess />}
          title='Thank you!'
          subtitle='Your account has been activated.'
          closeModalCallback={() => setActiveModal('')}
        >
          <div className='w-1/2 lg:w-full'>
            <ModalButton
              label='Log in'
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
        <span className='text-brand-khaki uppercase font-medium'>
          Movie Quotes
        </span>
        <div className='flex gap-4'>
          <span className='hidden lg:flex items-center gap-2.5 px-6 cursor-pointer'>
            Eng
            <span className='h-4 w-4 flex justify-center items-center pt-1'>
              <ArrowDown />
            </span>
          </span>
          <button
            className='h-9.5 px-6 bg-brand-red rounded hidden lg:inline-block'
            onClick={() => setActiveModal('register')}
          >
            Sign Up
          </button>
          <button
            className='h-9.5 px-6.5 border border-white rounded'
            onClick={() => setActiveModal('login')}
          >
            Log in
          </button>
        </div>
      </nav>

      <main
        className={
          'w-full bg-brand-background text-white ' +
          (activeModal || errorSplashMessage ? 'blur-sm' : '')
        }
      >
        <div className='h-[66vh] w-2/3 flex flex-col items-center pt-[16vh] lg:pt-[26vh] lg:w-1/2 2xl:w-5/12 mx-auto gap-8 lg:h-screen lg:gap-6'>
          <h1 className='text-brand-khaki font-bold text-2xl leading-normal text-center lg:text-5xl 2xl:text-6xl lg:leading-normal 2xl:leading-normal'>
            Find any quote in millions of movie lines
          </h1>
          <button
            className='bg-brand-red rounded px-3.5 h-9.5 lg:text-xl lg:h-12 lg:px-4'
            onClick={() => setActiveModal('register')}
          >
            Get Started
          </button>
        </div>
        <FeaturedQuote
          backgroundClass='bg-[url("/assets/interstellar.png")]'
          quote='“You have to leave something behind to go forward”'
          caption='Interstellar, 2014'
        />
        <FeaturedQuote
          backgroundClass='bg-[url("/assets/the-royal-tenendaums.png")]'
          quote='“I think we’re just gonna have to be secretly in love with each other and leave it that”'
          caption='The Royal Tenenbaums,2001'
        />
        <FeaturedQuote
          backgroundClass='bg-[url("/assets/lord-of-the-rings.png")]'
          quote='“I see in your eyes the same fear that would take the heart of me....”'
          caption='The Lord of the Rings, 2003'
        />
        <footer className='flex items-center h-8 px-8.5 uppercase font-medium text-2xs text-brand-khaki lg:text-xs lg:h-12 lg:px-17.5'>
          © 2022 movie quotes. All rights reserved.
        </footer>
      </main>
    </>
  );
};

export default Landing;
