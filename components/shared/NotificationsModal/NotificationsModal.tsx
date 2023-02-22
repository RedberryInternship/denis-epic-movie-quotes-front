import { Notification } from 'types';
import { NotificationItem } from 'components';
import { useNotificationsModal } from './useNotificationsModal';

const NotificationsModal = (props: {
  notifications?: Notification[];
  toggleShowNotifications: () => void;
}) => {
  const { markAllRead, t } = useNotificationsModal();

  return (
    <div className='fixed z-[225] bg-black top-22 text-white w-full px-9 pb-40 pt-5.5 rounded-xl lg:w-[600px] 2xl:w-[961px] lg:pr-0 lg:right-16 lg:pb-9 lg:pt-10 animate-grow-y origin-top lg:h-auto'>
      <div className='relative'>
        <div className='absolute -right-[18px] -top-8 rounded-sm border-x-[30px] border-x-transparent border-b-[40px] border-b-black lg:right-[213px] lg:-top-15'></div>
        <div className='h-[calc(100vh-1.375rem)] overflow-auto relative lg:h-[70vh] lg:max-h-[812px] lg:pr-9 lg:scrollbar-thin lg:scrollbar-thumb-brand-subtitle'>
          <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl lg:text-[32px]'>
              {t('notifications')}
            </h2>
            <button
              onClick={markAllRead}
              className='underline text-sm lg:hover:text-brand-crimson active:text-brand-crimson lg:text-xl'
            >
              {t('mark_as_read')}
            </button>
          </div>
          <div className='flex flex-col mt-6 gap-2 lg:gap-4 pb-36 lg:pb-0'>
            {props.notifications?.map((notification) => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
