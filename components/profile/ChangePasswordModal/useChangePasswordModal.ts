import { useProfileModalSubmit, useToggle } from 'hooks';
import { sendUpdateProfileRequest } from 'services';
import { SetState } from 'types';

export const useChangePasswordModal = (
  setPasswordModalIsOpen: SetState<boolean>
) => {
  const closeModalCallback = () => setPasswordModalIsOpen(false);

  const { isLoading, handleSubmit } = useProfileModalSubmit(
    sendUpdateProfileRequest,
    closeModalCallback
  );

  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);

  return {
    isLoading,
    handleSubmit,
    closeModalCallback,
    passwordIsHidden,
    togglePasswordIsHidden,
  };
};
