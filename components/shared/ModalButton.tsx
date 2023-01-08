const ModalButton = ({
  label,
  disabled,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className='w-full bg-brand-red h-9.5 mt-1 mb-2 rounded disabled:bg-brand-crimson'
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ModalButton;
