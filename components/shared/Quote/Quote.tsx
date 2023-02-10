import { Comment } from 'types';
import {
  NewsfeedComment,
  ProfilePicture,
  QuoteInteractions,
  SelfProfilePicture,
} from 'components';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { useQuote } from './useQuote';

const Quote = (
  props: PropsWithChildren<{
    id: number;
    image: string;
    isLiked: boolean;
    likeCount: number;
    refetchLikes: () => void;
    refetchComments: () => void;
    comments?: Comment[];
  }>
) => {
  const {
    user,
    register,
    setFocusOnComment,
    commentSubmitHandler,
    submitLikeOrUnlike,
  } = useQuote(
    props.id,
    props.isLiked,
    props.refetchLikes,
    props.refetchComments
  );

  return (
    <article className='bg-brand-article py-7 px-9 lg:px-6 lg:pt-6 lg:pb-10 lg:rounded-xl'>
      <div className='flex items-center gap-4 mb-3.5 lg:mb-4 lg:text-xl'>
        <ProfilePicture
          size={52}
          classNames='w-10 h-10 lg:w-13 lg:h-13'
          image={user.profilePicture}
        />
        {user.username}
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
          Write a comment
        </label>
        <input
          {...register('comment', {
            required: true,
          })}
          placeholder='Write a comment'
          className='bg-brand-darkblue placeholder:text-brand-pale pl-4 w-full rounded-1.5lg lg:pl-7'
        />
      </form>
    </article>
  );
};

export default Quote;
