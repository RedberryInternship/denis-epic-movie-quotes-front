import { Bin, EditPencil, Eye } from 'components';
import { PropsType } from './types';
import { useQuoteOptions } from './useQuoteOptions';

const QuoteOptions = (props: PropsType) => {
  const { optionsRef, editHandler, viewHandler, deleteHandler } =
    useQuoteOptions(props.id, props.movieID, props.dispatchActiveModal);

  return (
    <div
      ref={optionsRef}
      onClick={(e) => e.stopPropagation()}
      className='absolute origin-bottom-right bottom-0 right-0 lg:origin-top-right lg:top-5 lg:right-0 2xl:origin-top-left 2xl:left-0 lg:h-max animate-grow cursor-default text-base flex flex-col gap-8 rounded-lg bg-brand-lightmodal py-9 px-10 min-w-[250px]'
    >
      <button
        className='flex gap-4 items-center hover:text-brand-crimson hover:scale-105 hover:translate-x-2 transition'
        onClick={viewHandler}
      >
        <Eye />
        <span>View Post</span>
      </button>
      <button
        className='flex gap-4 items-center hover:text-brand-crimson hover:scale-105 hover:translate-x-2 transition'
        onClick={editHandler}
      >
        <EditPencil />
        <span>Edit</span>
      </button>
      <button
        className='flex gap-4 items-center hover:text-brand-crimson hover:scale-105 hover:translate-x-2 transition'
        onClick={deleteHandler}
      >
        <Bin />
        <span>Delete</span>
      </button>
    </div>
  );
};

export default QuoteOptions;
