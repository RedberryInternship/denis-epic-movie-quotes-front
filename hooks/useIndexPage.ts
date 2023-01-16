import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { verifyEmail } from 'services';
import { ApiResponse, Modals } from 'types';
import { useTranslation } from 'next-i18next';

export const useIndexPage = () => {
  const { t } = useTranslation(['landing', 'common', 'auth']);
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
            `${t('auth:verification_failed')}: ${response.message}`
          );
        }

        delete router.query.verify_url;
        await router.replace({ query: router.query }, undefined, {
          shallow: true,
        });
      };
      sendEmailVerifyRequest();
    }
  }, [emailVerifyURL, hasOAuthError, isResettingPassword, router, t]);

  return {
    activeModal,
    setActiveModal,
    errorSplashMessage,
    setErrorSplashMessage,
    t,
  };
};
