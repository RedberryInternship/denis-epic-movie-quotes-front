const NavButton = (props: {
  label: string;
  classNames: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={
        'underline text-brand-blue hover:text-blue-800 ' + props.classNames
      }
      type='button'
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default NavButton;
