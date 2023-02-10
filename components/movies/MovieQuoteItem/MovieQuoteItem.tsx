import Image from 'next/image';
import { QuoteInteractions, QuoteOptions, ThreeDots } from 'components';
import { MovieQuote, QuoteModalsReducerAction } from 'types';
import { useLocale } from 'hooks';
import { Dispatch } from 'react';

const MovieQuoteItem = (
  props: MovieQuote & {
    currentQuoteOptionsId: number | null;
    dispatchActiveModal: Dispatch<QuoteModalsReducerAction>;
  }
) => {
  const locale = useLocale();

  return (
    <article
      key={props.id}
      className='bg-brand-article mb-9 pt-5 px-9 pb-4 text-2xl lg:max-w-[809px] lg:mb-10 lg:rounded-1.5lg lg:relative lg:pl-8 lg:pr-10'
    >
      <div className='lg:flex items-center gap-8.5 lg:pb-6'>
        <Image
          width={359}
          height={140}
          src={props.image}
          className='rounded mb-6 mx-auto lg:mx-0 lg:mb-0 lg:w-[226px] object-cover max-h-[170px]'
          alt=''
        />
        <p className='mb-6 text-brand-pale italic sm:text-center lg:mb-0 lg:pt-7 pb-4 lg:text-left'>
          {props.body[locale]}
        </p>
      </div>

      <hr className='mb-5 border-brand-divide border-t-1.5 lg:mb-6' />
      <div className='flex justify-between items-center'>
        <QuoteInteractions
          commentCount={props.comments_count}
          likeCount={props.likes_count}
          isLiked={Boolean(props.likes.length)}
        />
        <div className='lg:absolute top-6 right-8'>
          <div
            className='relative cursor-pointer'
            onClick={() =>
              props.dispatchActiveModal({
                type: 'quote',
                quoteID: props.id,
                modalType: 'options',
              })
            }
          >
            {props.currentQuoteOptionsId === props.id && (
              <QuoteOptions
                id={props.id}
                movieID={props.movie_id}
                dispatchActiveModal={props.dispatchActiveModal}
              />
            )}
            <ThreeDots />
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieQuoteItem;
