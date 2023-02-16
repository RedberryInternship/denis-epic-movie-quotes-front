import { Quote } from 'components';
import { NewsfeedQuote as NewsfeedQuoteType } from 'types';
import { useNewsfeedQuote } from './useNewsfeedQuote';

const NewsfeedQuote = (props: NewsfeedQuoteType & { page: number }) => {
  const { locale, isLiked, refetchPage } = useNewsfeedQuote(
    props.page,
    props.id,
    props.likes
  );

  return (
    <Quote
      id={props.id}
      isLiked={isLiked}
      comments={props.comments}
      image={props.image}
      likeCount={props.likes_count}
      refetchLikes={refetchPage}
      refetchComments={refetchPage}
      authorUsername={props.user.username}
      authorImage={props.user.profile_picture}
    >
      {props.body[locale]} -
      <strong className='text-brand-khaki'>
        {` ${props.movie.title[locale]}`}
      </strong>
    </Quote>
  );
};

export default NewsfeedQuote;
