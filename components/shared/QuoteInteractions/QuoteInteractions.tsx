import { Heart, TextBubble } from 'components';
import { PropsType } from './types';

const QuoteInteractions = (props: PropsType) => {
  return (
    <div className='flex text-xl gap-6 lg:mb-6'>
      <button
        className={
          'flex gap-3 items-center ' +
          (props.setFocusOnComment ? '' : 'cursor-default')
        }
        onClick={props.setFocusOnComment}
      >
        <span className='mb-1'>{props.commentCount}</span>
        <div
          className={
            'flex items-center w-6 ' +
            (props.setFocusOnComment ? 'lg:w-6 hover:text-[#F3426C]' : 'lg:w-8')
          }
        >
          <TextBubble />
        </div>
      </button>
      <div className='flex gap-3'>
        <span className='mb-1'>{props.likeCount}</span>
        <button
          onClick={props.submitLikeOrUnlike}
          className={props.submitLikeOrUnlike ? '' : 'cursor-default'}
        >
          <div
            className={
              'flex items-center w-6 ' +
              (props.submitLikeOrUnlike
                ? 'lg:w-6 hover:text-[#F3426C]'
                : 'lg:w-8')
            }
          >
            <Heart isActive={props.isLiked} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default QuoteInteractions;
