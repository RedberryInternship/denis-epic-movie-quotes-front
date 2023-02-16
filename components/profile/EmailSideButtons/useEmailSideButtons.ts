import { useQueryClient } from 'react-query';
import { sendDeleteEmailRequest, sendMakeEmailPrimaryRequest } from 'services';
import { showToast } from 'helpers';
import { Email } from 'types';

export const useEmailSideButtons = (email: Email) => {
  const queryClient = useQueryClient();

  const makePrimary = async () => {
    await sendMakeEmailPrimaryRequest(email.id);
    showToast(`${email.address} is now your primary email`);
    await queryClient.refetchQueries('user');
  };

  const removeEmail = async () => {
    await sendDeleteEmailRequest(email.id);
    showToast(`Email ${email.address} removed successfully`);
    await queryClient.refetchQueries('user');
  };

  return { makePrimary, removeEmail };
};
