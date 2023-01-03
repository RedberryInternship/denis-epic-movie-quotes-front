const TextInput = (props: {
  name: string;
  label: string;
  requiredAsterisk?: boolean;
  placeholder: string;
  validationRules?: object;
}) => {
  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={props.name} className='mb-2'>
        {props.label}{' '}
        {props.requiredAsterisk && (
          <span className='text-brand-crimson'>*</span>
        )}
      </label>
      <input
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        type='text'
        className='w-full h-9.5 px-3.5 bg-brand-pale text-black placeholder:text-brand-subtitle rounded'
      />
      <p className='h-5 text-brand-crimson text-sm'></p>
    </div>
  );
};

export default TextInput;
