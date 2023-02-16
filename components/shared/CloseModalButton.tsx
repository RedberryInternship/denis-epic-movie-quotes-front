import { Close } from 'components';

const CloseModalButton = (props: { onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className='text-white fixed lg:absolute bg-[#00000080] p-3 z-50 opacity-80 top-10 left-5.5 lg:bg-transparent lg:left-auto lg:right-8.5 rounded-full'
    >
      <Close />
    </button>
  );
};

export default CloseModalButton;
