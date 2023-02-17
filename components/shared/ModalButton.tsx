import { DefaultTFuncReturn } from 'i18next';

const ModalButton = (props: {
  label: string | JSX.Element | DefaultTFuncReturn;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className='w-full bg-brand-red h-9.5 mt-1 mb-2 rounded disabled:bg-brand-crimson flex justify-center items-center'
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default ModalButton;
