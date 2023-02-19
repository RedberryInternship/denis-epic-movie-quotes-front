import { useProfileModalSubmit } from 'hooks';
import { sendAddEmailRequest } from 'services';
import { SetState } from 'types';
import { useTranslation } from 'next-i18next';

export const useAddEmailModal = (setIsAddingEmail: SetState<boolean>) => {
  const { t } = useTranslation('profile');
  const closeModalCallback = () => setIsAddingEmail(false);

  const { isLoading, handleSubmit } = useProfileModalSubmit(
    sendAddEmailRequest,
    closeModalCallback,
    t('toast_email_verify'),
    t('toast_email') as string
  );

  return { isLoading, handleSubmit, closeModalCallback, t };
};
