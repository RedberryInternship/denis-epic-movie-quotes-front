import { useQueryClient } from 'react-query';
import { markAllNotificationsAsSeen } from 'services';
import { useDisableBodyScroll } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useNotificationsModal = () => {
  const queryClient = useQueryClient();

  const markAllRead = async () => {
    await markAllNotificationsAsSeen();
    await queryClient.refetchQueries('notifications');
  };

  useDisableBodyScroll(true);

  const { t } = useTranslation('common');

  return { markAllRead, t };
};
