import { Bin } from 'components';

const QuoteDeleteButton = (props: { onClick: () => void }) => {
  return (
    <button className='opacity-80 p-1' onClick={props.onClick}>
      <div className='flex items-center gap-2 hover:text-brand-crimson text-brand-pale hover:scale-105 transition'>
        <Bin />
        <span className='hidden lg:inline'>Delete</span>
      </div>
    </button>
  );
};

export default QuoteDeleteButton;
