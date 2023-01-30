import {
  useProfileModalSubmit,
  useToggle,
  useValidatePasswordConfirmation,
} from 'hooks';
import { sendUpdateProfileRequest } from 'services';
import { SetState } from 'types';
import { validationRules } from './validationRules';

export const useChangePasswordModal = (
  setPasswordModalIsOpen: SetState<boolean>
) => {
  const closeModalCallback = () => setPasswordModalIsOpen(false);

  const { isLoading, handleSubmit } = useProfileModalSubmit(
    sendUpdateProfileRequest,
    closeModalCallback
  );

  const [passwordIsHidden, togglePasswordIsHidden] = useToggle(true);
  const validatePasswordConfirmation = useValidatePasswordConfirmation(
    validationRules.password_confirmation
  );

  return {
    isLoading,
    handleSubmit,
    closeModalCallback,
    passwordIsHidden,
    togglePasswordIsHidden,
    validatePasswordConfirmation,
  };
};
