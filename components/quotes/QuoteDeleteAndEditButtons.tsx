import { Bin, EditPencil } from 'components';

const QuoteDeleteAndEditButtons = (props: {
  editHandler: () => void;
  deleteHandler: () => void;
}) => {
  return (
    <div className='flex items-center gap-6'>
      <button
        className='opacity-80 p-1 hover:text-brand-crimson text-brand-pale transition hover:scale-125'
        onClick={props.editHandler}
      >
        <EditPencil />
      </button>
      <span className='w-px bg-brand-pale h-4'></span>
      <button
        className='opacity-80 p-1 hover:text-brand-crimson text-brand-pale transition hover:scale-125'
        onClick={props.deleteHandler}
      >
        <Bin />
      </button>
    </div>
  );
};

export default QuoteDeleteAndEditButtons;
