import { useQueryClient } from 'react-query';
import { sendDeleteEmailRequest, sendMakeEmailPrimaryRequest } from 'services';
import { showToast } from 'helpers';
import { Email } from 'types';
import { useTranslation } from 'next-i18next';

export const useEmailSideButtons = (email: Email) => {
  const { t } = useTranslation('profile');
  const queryClient = useQueryClient();

  const makePrimary = async () => {
    await sendMakeEmailPrimaryRequest(email.id);
    showToast(`${email.address} ${t('toast_primary')}`);
    await queryClient.refetchQueries('user');
  };

  const removeEmail = async () => {
    await sendDeleteEmailRequest(email.id);
    showToast(`${t('email')} ${email.address} ${t('toast_removed')}`);
    await queryClient.refetchQueries('user');
  };

  return { makePrimary, removeEmail, t };
};
