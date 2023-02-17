import { useQueryClient } from 'react-query';
import { markAllNotificationsAsSeen } from 'services';
import { useDisableBodyScroll } from 'hooks';

export const useNotificationsModal = () => {
  const queryClient = useQueryClient();

  const markAllRead = async () => {
    await markAllNotificationsAsSeen();
    await queryClient.refetchQueries('notifications');
  };

  useDisableBodyScroll(true);

  return { markAllRead };
};
