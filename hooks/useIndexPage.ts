import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { verifyEmail } from '../services';
import { ApiResponse } from '../types';

export const useIndexPage = () => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [forgotPassIsOpen, setForgotPassIsOpen] = useState(false);
  const [confirmationSplashIsOpen, setConfirmationSplashIsOpen] =
    useState(false);
  const [verifiedSplashIsOpen, setVerifiedSplashIsOpen] = useState(false);
  const [errorSplashMessage, setErrorSplashMessage] = useState('');

  const modalIsOpen =
    loginIsOpen ||
    registerIsOpen ||
    forgotPassIsOpen ||
    confirmationSplashIsOpen ||
    verifiedSplashIsOpen ||
    errorSplashMessage;

  const router = useRouter();

  const emailVerifyURL = router.query.verify_url;

  useEffect(() => {
    if (!emailVerifyURL) return;

    const sendEmailVerifyRequest = async () => {
      const response = (await verifyEmail(
        emailVerifyURL.toString()
      )) as ApiResponse<{}>;

      if (response.success) {
        setVerifiedSplashIsOpen(true);
      } else {
        setErrorSplashMessage(`Email verification failed: ${response.message}`);
      }

      delete router.query.verify_url;
      await router.replace({ query: router.query }, undefined, {
        shallow: true,
      });
    };

    sendEmailVerifyRequest();
  }, [emailVerifyURL, router]);

  return {
    loginIsOpen,
    setLoginIsOpen,
    registerIsOpen,
    setRegisterIsOpen,
    forgotPassIsOpen,
    setForgotPassIsOpen,
    confirmationSplashIsOpen,
    setConfirmationSplashIsOpen,
    verifiedSplashIsOpen,
    setVerifiedSplashIsOpen,
    modalIsOpen,
    errorSplashMessage,
    setErrorSplashMessage,
  };
};
