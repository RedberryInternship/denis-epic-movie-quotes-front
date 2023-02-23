import { useRouter } from 'next/router';
import { echo, getNotifications, sendLogoutRequest } from 'services';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useQuery, useQueryClient } from 'react-query';
import { useEffect, useRef, useState } from 'react';
import Echo from 'laravel-echo';
import { Notification } from 'types';
import { useTranslation } from 'next-i18next';

export const useNavbar = () => {
  const user = useSelector((state: RootState) => state.user);
  const queryClient = useQueryClient();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationButtonRef = useRef<HTMLButtonElement>(null);
  const notificationModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleNotificationModal = (e: MouseEvent) => {
      if (notificationButtonRef.current?.contains(e.target as Node)) {
        setShowNotifications((prev) => !prev);
      } else if (
        showNotifications &&
        !notificationModalRef.current?.contains(e.target as Node)
      ) {
        setShowNotifications(false);
      }
    };
    window.addEventListener('pointerup', toggleNotificationModal);

    return () =>
      window.removeEventListener('pointerup', toggleNotificationModal);
  }, [showNotifications]);

  const router = useRouter();
  const logout = async () => {
    await sendLogoutRequest();
    await router.push('/');
  };

  const fetchNotifications = async () => {
    const response = await getNotifications();
    return response.data;
  };

  const { data: notifications } = useQuery('notifications', fetchNotifications);

  useEffect(() => {
    if (user.id) {
      (echo as Echo)
        .private(`user_${user.id}`)
        .listen(
          'NotificationEvent',
          ({ notification }: { notification: Notification }) => {
            queryClient.setQueryData('notifications', (currentItems) => [
              notification,
              ...(currentItems as Notification[]).filter(
                (item) => item.id !== notification.id
              ),
            ]);
          }
        );
    }

    return () => echo?.leaveAllChannels();
  }, [queryClient, user.id]);

  const unreadNotificationCount = notifications?.filter(
    (notification) => !notification.is_read
  ).length;

  const { t } = useTranslation('common');

  return {
    logout,
    showNotifications,
    setShowNotifications,
    notificationButtonRef,
    notificationModalRef,
    unreadNotificationCount,
    notifications,
    t,
  };
};
