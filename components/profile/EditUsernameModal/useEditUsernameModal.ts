import { useProfileModalSubmit } from 'hooks';
import { sendUpdateProfileRequest } from 'services';
import { SetState } from 'types';
import { useTranslation } from 'next-i18next';

export const useEditUsernameModal = (
  setUsernameModalIsOpen: SetState<boolean>
) => {
  const { t } = useTranslation('profile');

  const closeModalCallback = () => setUsernameModalIsOpen(false);

  const { isLoading, handleSubmit } = useProfileModalSubmit(
    sendUpdateProfileRequest,
    closeModalCallback,
    t('toast_username')
  );

  return { isLoading, handleSubmit, closeModalCallback, t };
};
