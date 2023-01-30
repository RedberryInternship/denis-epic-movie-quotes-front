import { useProfileModalSubmit } from 'hooks';
import { sendAddEmailRequest } from 'services';
import { SetState } from 'types';

export const useAddEmailModal = (setIsAddingEmail: SetState<boolean>) => {
  const closeModalCallback = () => setIsAddingEmail(false);

  const { isLoading, handleSubmit } = useProfileModalSubmit(
    sendAddEmailRequest,
    closeModalCallback
  );

  return { isLoading, handleSubmit, closeModalCallback };
};
