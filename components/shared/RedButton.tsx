import { DefaultTFuncReturn } from 'i18next';

const RedButton = (props: {
  onClick: () => void;
  label: string | JSX.Element | DefaultTFuncReturn;
  classNames: string;
}) => {
  return (
    <button
      type='button'
      className={
        'bg-brand-red rounded h-9.5 lg:text-xl lg:h-12 transition hover:scale-105 active:text-brand-red active:bg-white ' +
        props.classNames
      }
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default RedButton;
