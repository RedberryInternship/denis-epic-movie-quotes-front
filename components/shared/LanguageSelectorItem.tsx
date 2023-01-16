const LanguageSelectorItem = (props: {
  label: string;
  value: string;
  setLocale: (newLocale: string) => void;
}) => {
  return (
    <li
      onClick={() => props.setLocale(props.value)}
      role='menuitem'
      tabIndex={0}
      className='cursor-pointer block px-4 py-2 rounded-md hover:bg-brand-crimson hover:text-white focus:bg-brand-crimson focus:text-white'
    >
      {props.label}
    </li>
  );
};

export default LanguageSelectorItem;
