import {
  NewsfeedComment,
  ProfilePicture,
  QuoteInteractions,
  SelfProfilePicture,
} from 'components';
import Image from 'next/image';
import { useQuote } from './useQuote';
import { PropsType } from './types';

const Quote = (props: PropsType) => {
  const {
    register,
    setFocusOnComment,
    commentSubmitHandler,
    submitLikeOrUnlike,
    t,
  } = useQuote(
    props.id,
    props.isLiked,
    props.refetchLikes,
    props.refetchComments
  );

  return (
    <article
      className={
        'bg-brand-article py-7 px-9 lg:rounded-xl ' +
        (props.hasPadding ? 'lg:px-6 lg:pt-6 lg:pb-10' : 'lg:p-0')
      }
    >
      <div className='flex items-center gap-4 mb-3.5 lg:mb-4 lg:text-xl'>
        <ProfilePicture
          size={52}
          classNames='w-10 h-10 lg:w-13 lg:h-13'
          image={props.authorImage}
        />
        {props.authorUsername}
      </div>
      <div className='lg:text-xl'>
        {props.children}
        <Image
          src={props.image}
          alt=''
          className='object-cover w-full h-[200px] rounded-1.5lg mt-4 mb-5 lg:mt-7 lg:mb-6 lg:h-[500px] lg:max-h-[50vh]'
          width={720}
          height={400}
        />
      </div>
      <div className='mb-5'>
        <QuoteInteractions
          commentCount={props.comments?.length as number}
          likeCount={props.likeCount}
          isLiked={props.isLiked}
          setFocusOnComment={setFocusOnComment}
          submitLikeOrUnlike={submitLikeOrUnlike}
        />
      </div>
      <hr className='border-brand-divide w-full' />

      {props.comments?.map((comment) => (
        <NewsfeedComment key={comment.id} {...comment} />
      ))}

      <form className='flex gap-3 mt-4 lg:mt-6' onSubmit={commentSubmitHandler}>
        <SelfProfilePicture size={52} />
        <label className='sr-only' htmlFor='comment'>
          {t('write_comment')}
        </label>
        <input
          {...register('comment', {
            required: true,
          })}
          placeholder={t('write_comment') as string}
          className='bg-brand-darkblue placeholder:text-brand-pale pl-4 w-full rounded-1.5lg lg:pl-7'
        />
      </form>
    </article>
  );
};

export default Quote;
