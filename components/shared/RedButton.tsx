const RedButton = (props: {
  onClick: () => void;
  label: string;
  classNames: string;
}) => {
  return (
    <button
      className={
        'bg-brand-red rounded h-9.5 lg:text-xl lg:h-12 ' + props.classNames
      }
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default RedButton;
