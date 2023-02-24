import { Notification, SetState } from 'types';
import Image from 'next/image';
import { Heart, QuoteIcon } from 'components';
import { getRelativeTime } from 'helpers';
import { useNotificationItem } from './useNotificationItem';
import { markNotificationAsSeen } from 'services';

const NotificationItem = (
  props: Notification & { setShowNotifications: SetState<boolean> }
) => {
  const { redirectToViewQuote, t } = useNotificationItem(
    props.quote,
    props.setShowNotifications
  );

  return (
    <article
      onClick={
        props.is_read
          ? redirectToViewQuote
          : async () => {
              await markNotificationAsSeen(props.id);
              await redirectToViewQuote();
            }
      }
      className='grid grid-rows-[min-content_min-content_min-content] grid-cols-[min-content_1fr] lg:grid-rows-2 cursor-pointer hover:bg-brand-lightmodal lg:grid-cols[min-content_1fr_min-content] border border-[#6C757DAA] min-h-[121px] rounded w-full p-4 gap-x-3 gap-y-1 lg:gap-x-6 lg:gap-y-1.5 lg:min-h-[117px] transition animate-grow'
    >
      <Image
        src={props.from_user.profile_picture as string}
        alt=''
        className={
          'col-start-1 row-start-1 row-end-3 rounded-full object-cover min-w-[3.75rem] min-h-[3.75rem] lg:min-w-[5rem] lg:min-h-[5rem] ' +
          (props.is_read ? '' : 'border-2 border-brand-green')
        }
        width={80}
        height={80}
      />
      <div className='col-start-1 row-start-3 lg:col-start-3 lg:row-start-2 justify-self-center text-brand-green lg:self-start'>
        {props.is_read ? '' : t('new')}
      </div>
      <div className='col-start-2 row-start-1 text-xl lg:pb-1 lg:self-end'>
        {props.from_user.username}
      </div>
      <div className='col-start-2 row-start-2 align-self-end flex gap-3 text-brand-pale leading-tight items-center lg:self-start'>
        {props.is_comment ? (
          <div className='w-6 h-[1.375rem]'>
            <QuoteIcon />
          </div>
        ) : (
          <div className='w-4 h-4'>
            <Heart isActive={true} />
          </div>
        )}
        {props.is_comment
          ? t('notification_commented')
          : t('notification_liked')}
      </div>
      <div className='col-start-2 row-start-3 lg:col-start-3 lg:row-start-1 text-brand-pale lg:pb-1 lg:self-end'>
        {getRelativeTime(new Date(props.created_at))}
      </div>
    </article>
  );
};

export default NotificationItem;
