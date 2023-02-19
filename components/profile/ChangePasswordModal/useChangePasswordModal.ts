import { useProfileModalSubmit, useToggle } from 'hooks';
import { sendUpdateProfileRequest } from 'services';
import { SetState } from 'types';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

export const useChangePasswordModal = (
  setPasswordModalIsOpen: SetState<boolean>
) => {
  const { t } = useTranslation('profile');
  const closeModalCallback = () => setPasswordModalIsOpen(false);

  const { isLoading, handleSubmit } = useProfileModalSubmit(
    sendUpdateProfileRequest,
    closeModalCallback,
    t('toast_password')
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
    t,
  };
};
