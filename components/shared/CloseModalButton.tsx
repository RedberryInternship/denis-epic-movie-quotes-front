import { Close } from 'components';

const CloseModalButton = (props: {
  onClick: () => void;
  isSplashModal?: boolean;
}) => {
  return (
    <button
      onClick={props.onClick}
      className={
        'text-white fixed lg:absolute bg-[#00000080] p-3 z-50 opacity-80  left-5.5 lg:bg-transparent lg:left-auto lg:right-8.5 rounded-full ' +
        (props.isSplashModal ? 'top-24' : 'top-10')
      }
    >
      <Close />
    </button>
  );
};

export default CloseModalButton;
