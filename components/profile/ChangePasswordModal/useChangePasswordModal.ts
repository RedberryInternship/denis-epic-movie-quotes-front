import { useProfileModalSubmit } from 'hooks';
import { sendUpdateProfileRequest } from 'services';
import { SetState } from 'types';
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

  return {
    isLoading,
    handleSubmit,
    closeModalCallback,
    t,
  };
};
