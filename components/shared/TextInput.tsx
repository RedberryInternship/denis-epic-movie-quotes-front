import { useFormContext } from 'react-hook-form';
import { FormError } from 'components';

const TextInput = (props: {
  name: string;
  type?: 'text' | 'password';
  label: string;
  requiredAsterisk?: boolean;
  placeholder: string;
  validationRules?: object;
  onChange?: (arg0: any) => void;
}) => {
  const { register } = useFormContext();

  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={props.name} className='mb-2'>
        {props.label}
        {props.requiredAsterisk && (
          <span className='text-brand-crimson'>*</span>
        )}
      </label>
      <input
        {...register(props.name, {
          ...props.validationRules,
          ...{ onChange: props.onChange },
        })}
        id={props.name}
        placeholder={props.placeholder}
        type={props.type || 'text'}
        className='w-full h-9.5 px-3.5 bg-brand-pale text-black placeholder:text-brand-subtitle rounded'
      />
      <FormError name={props.name} />
    </div>
  );
};

export default TextInput;
