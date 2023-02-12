import { useMutation, useQueryClient } from 'react-query';
import { markNotificationAsSeen } from 'services';
import { Notification } from 'types';

export const useNotificationItem = (notificationID: number) => {
  const queryClient = useQueryClient();

  const { mutate: markAsRead, isLoading } = useMutation({
    mutationFn: () => markNotificationAsSeen(notificationID),
    onSuccess: (updatedNotification) => {
      queryClient.setQueryData('notifications', (currentItems) => [
        ...(currentItems as Notification[]).map((item) => {
          return item.id === updatedNotification.id
            ? updatedNotification
            : item;
        }),
      ]);
    },
  });

  return { markAsRead, isLoading };
};
