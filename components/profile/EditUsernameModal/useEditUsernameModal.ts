import { useProfileModalSubmit } from 'hooks';
import { sendUpdateProfileRequest } from 'services';
import { SetState } from 'types';

export const useEditUsernameModal = (
  setUsernameModalIsOpen: SetState<boolean>
) => {
  const closeModalCallback = () => setUsernameModalIsOpen(false);

  const { isLoading, handleSubmit } = useProfileModalSubmit(
    sendUpdateProfileRequest,
    closeModalCallback
  );

  return { isLoading, handleSubmit, closeModalCallback };
};
