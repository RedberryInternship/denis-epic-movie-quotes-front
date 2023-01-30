import {
  Heart,
  NewsfeedComment,
  ProfilePicture,
  SelfProfilePicture,
  TextBubble,
} from 'components';
import Image from 'next/image';
import { NewsfeedQuote as NewsfeedQuoteType } from 'types';
import { useNewsfeedQuote } from './useNewsfeedQuote';

const NewsfeedQuote = (props: NewsfeedQuoteType & { page: number }) => {
  const { locale, isLiked, submitLikeOrUnlike } = useNewsfeedQuote(
    props.page,
    props.id,
    props.likes
  );

  return (
    <article className='bg-brand-article py-7 px-9 lg:px-6 lg:pt-6 lg:pb-10 lg:rounded-xl'>
      <div className='flex items-center gap-4 mb-3.5 lg:mb-4 lg:text-xl'>
        <ProfilePicture
          size={52}
          classNames='w-10 h-10 lg:w-13 lg:h-13'
          image={props.user.profile_picture}
        />
        {props.user.username}
      </div>
      <div className='lg:text-xl'>
        {props.body[locale]} -
        <strong className='text-brand-khaki'>
          {` ${props.movie.title[locale]}`}
        </strong>
        <Image
          src={props.image}
          alt=''
          className='object-cover w-full h-[200px] rounded-1.5lg mt-4 mb-5 lg:mt-7 lg:mb-6 lg:h-[500px] lg:max-h-[50vh]'
          width={720}
          height={400}
        />
      </div>
      <div className='flex text-xl gap-6 mb-5 lg:mb-6'>
        <div className='flex gap-3'>
          <span className='mb-1'>{props.comments.length}</span>
          <button>
            <TextBubble />
          </button>
        </div>
        <div className='flex gap-3'>
          <span className='mb-1'>{props.likes_count}</span>
          <button onClick={submitLikeOrUnlike}>
            <Heart isActive={isLiked} />
          </button>
        </div>
      </div>
      <hr className='border-brand-divide w-full' />

      {props.comments.map((comment) => (
        <NewsfeedComment key={comment.id} {...comment} />
      ))}

      <div className='flex gap-3 mt-4 lg:mt-6'>
        <SelfProfilePicture size={52} />
        <label className='sr-only'>Write a comment</label>
        <input
          placeholder='Write a comment'
          className='bg-brand-darkblue placeholder:text-brand-pale pl-4 w-full rounded-1.5lg lg:pl-7'
        />
      </div>
    </article>
  );
};

export default NewsfeedQuote;
