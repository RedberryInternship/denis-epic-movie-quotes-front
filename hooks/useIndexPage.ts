import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { verifyEmail } from 'services';
import { ApiResponse, Modals } from 'types';

export const useIndexPage = () => {
  const [activeModal, setActiveModal] = useState<Modals>('');

  const [errorSplashMessage, setErrorSplashMessage] = useState('');

  const router = useRouter();

  const emailVerifyURL = router.query.verify_url;
  const isResettingPassword = router.query.password_reset;
  const hasOAuthError = router.query.oauth_error;

  useEffect(() => {
    if (isResettingPassword) {
      setActiveModal('reset_pass');
    } else if (hasOAuthError) {
      const errorMessage = router.query.message as string;
      setErrorSplashMessage(errorMessage);
    } else if (emailVerifyURL) {
      const sendEmailVerifyRequest = async () => {
        const response = (await verifyEmail(
          emailVerifyURL.toString()
        )) as ApiResponse<{}>;

        if (response.success) {
          setActiveModal('verified');
        } else {
          setErrorSplashMessage(
            `Email verification failed: ${response.message}`
          );
        }

        delete router.query.verify_url;
        await router.replace({ query: router.query }, undefined, {
          shallow: true,
        });
      };
      sendEmailVerifyRequest();
    }
  }, [emailVerifyURL, isResettingPassword, router]);

  return {
    activeModal,
    setActiveModal,
    errorSplashMessage,
    setErrorSplashMessage,
  };
};
