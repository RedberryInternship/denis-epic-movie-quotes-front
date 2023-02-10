import {
  Close,
  MovieModalWrapper,
  Quote,
  QuoteDeleteAndEditButtons,
} from 'components';
import { MovieQuote, QuoteModalsReducerAction } from 'types';
import { Dispatch } from 'react';
import { useFullQuoteView } from './useFullQuoteView';

const FullQuoteView = (props: {
  quote: MovieQuote;
  closeModal: () => void;
  dispatchActiveModal: Dispatch<QuoteModalsReducerAction>;
}) => {
  const {
    comments,
    refetchComments,
    refetchLikes,
    deleteHandler,
    editHandler,
  } = useFullQuoteView(
    props.quote,
    props.closeModal,
    props.dispatchActiveModal
  );

  return (
    <MovieModalWrapper
      title='View quote'
      rightIcon={<Close />}
      onRightIconClick={props.closeModal}
      hideTitle={true}
      removePadding={true}
      leftElement={
        <QuoteDeleteAndEditButtons
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      }
    >
      <Quote
        id={props.quote.id}
        image={props.quote.image}
        isLiked={Boolean(props.quote.likes.length)}
        comments={comments}
        likeCount={props.quote.likes_count}
        refetchLikes={refetchLikes}
        refetchComments={refetchComments}
      >
        <div className='relative'>
          <textarea
            disabled={true}
            className='min-h-[5.375rem] lg:min-h-[3rem] pr-12 overflow-hidden border border-brand-subtitle bg-transparent rounded px-[17px] w-full mb-4 lg:mb-5 placeholder:text-brand-subtitle focus:outline-[#A9B4BE] focus:outline-[#A9B4BE] focus:ring-[#A9B4BE] focus:ring-offset-0 focus:outline-offset-0 focus:outline-4 focus:border-brand-subtitle '
            value={props.quote.body['en']}
          />
          <span className='absolute h-12 flex items-center top-0 right-[17px] text-brand-subtitle'>
            Eng
          </span>
        </div>

        <div className='relative'>
          <textarea
            disabled={true}
            className='min-h-[5.375rem] lg:min-h-[3rem] pr-12 overflow-hidden border border-brand-subtitle bg-transparent rounded px-[17px] w-full mb-4 lg:mb-5 placeholder:text-brand-subtitle focus:outline-[#A9B4BE] focus:outline-[#A9B4BE] focus:ring-[#A9B4BE] focus:ring-offset-0 focus:outline-offset-0 focus:outline-4 focus:border-brand-subtitle '
            value={props.quote.body['ka']}
          />
          <span className='absolute h-12 flex items-center top-0 right-[17px] text-brand-subtitle'>
            ქარ
          </span>
        </div>
      </Quote>
    </MovieModalWrapper>
  );
};

export default FullQuoteView;
