import { useQueryClient } from 'react-query';
import { markAllNotificationsAsSeen } from 'services';
import { useModal } from 'hooks';

export const useNotificationsModal = (toggleShowNotifications: () => void) => {
  const queryClient = useQueryClient();

  const markAllRead = async () => {
    await markAllNotificationsAsSeen();
    await queryClient.refetchQueries('notifications');
  };

  const modalRef = useModal(() => toggleShowNotifications(), true);

  return { modalRef, markAllRead };
};
