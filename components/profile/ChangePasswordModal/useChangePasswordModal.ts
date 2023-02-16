import { useProfileModalSubmit, useToggle } from 'hooks';
import { sendUpdateProfileRequest } from 'services';
import { SetState } from 'types';
import { useWatch } from 'react-hook-form';

export const useChangePasswordModal = (
  setPasswordModalIsOpen: SetState<boolean>
) => {
  const closeModalCallback = () => setPasswordModalIsOpen(false);

  const { isLoading, handleSubmit } = useProfileModalSubmit(
    sendUpdateProfileRequest,
    closeModalCallback
  );

  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);

  const passwordValue = useWatch({ name: 'password' });
  const passwordMinLengthValid = passwordValue && passwordValue.length >= 8;
  const passwordMaxLengthValid = passwordValue && passwordValue.length < 16;

  return {
    isLoading,
    handleSubmit,
    closeModalCallback,
    passwordIsHidden,
    togglePasswordIsHidden,
    passwordMinLengthValid,
    passwordMaxLengthValid,
  };
};
