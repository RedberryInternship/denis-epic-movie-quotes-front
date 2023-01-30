import { useQueryClient } from 'react-query';
import { sendDeleteEmailRequest, sendMakeEmailPrimaryRequest } from 'services';

export const useEmailSideButtons = (emailID: number) => {
  const queryClient = useQueryClient();

  const makePrimary = async () => {
    await sendMakeEmailPrimaryRequest(emailID);
    await queryClient.refetchQueries('user');
  };

  const removeEmail = async () => {
    await sendDeleteEmailRequest(emailID);
    await queryClient.refetchQueries('user');
  };

  return { makePrimary, removeEmail };
};
