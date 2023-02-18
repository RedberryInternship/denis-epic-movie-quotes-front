import { InfoCircle } from 'components';

const InputSideButton = (props: {
  label: string;
  onClick?: () => void;
  buttonAppearance?: boolean;
  warningAppearance?: boolean;
}) => {
  return (
    <button
      type='button'
      className={
        props.buttonAppearance
          ? ' border-1.5 border-brand-lightgray text-white px-4 h-9.5 rounded lg:border-0 lg:px-0 lg:h-auto lg:text-brand-pale lg:rounded-0'
          : 'text-brand-pale'
      }
      onClick={props.onClick}
    >
      <div
        className={
          props.warningAppearance
            ? 'flex items-center gap-2 text-brand-yellow italic'
            : ''
        }
      >
        {props.warningAppearance && (
          <span className='lg:hidden flex w-3.5 h-3.5'>
            <InfoCircle />
          </span>
        )}
        {props.label}
      </div>
    </button>
  );
};

export default InputSideButton;
