import { Notification } from 'types';
import { useNotificationsModal } from './useNotificationsModal';

const NotificationsModal = (props: {
  notifications?: Notification[];
  toggleShowNotifications: () => void;
}) => {
  const { modalRef, markAllRead } = useNotificationsModal(
    props.toggleShowNotifications
  );

  return (
    <div
      ref={modalRef}
      className='absolute z-50 bg-black top-22 text-white w-full px-9 pb-40 pt-5.5 rounded-xl lg:w-[600px] 2xl:w-[961px] lg:pr-0 lg:right-16 lg:pb-9 lg:pt-10 animate-grow-y origin-top lg:h-auto'
    >
      <div className='relative'>
        <div className='absolute -right-[18px] -top-8 rounded-sm border-x-[30px] border-x-transparent border-b-[40px] border-b-black lg:right-[233px] lg:-top-15'></div>
        <div className='h-[calc(100vh-1.375rem)] overflow-auto relative lg:h-[70vh] lg:max-h-[812px] lg:pr-9 lg:scrollbar-thin lg:scrollbar-thumb-brand-subtitle'>
          <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl lg:text-[32px]'>
              Notifications
            </h2>
            <button
              onClick={markAllRead}
              className='underline text-sm lg:hover:text-brand-crimson active:text-brand-crimson lg:text-xl'
            >
              Mark all as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
