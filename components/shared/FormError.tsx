import { useFormState } from 'react-hook-form';

const FormError = (props: { name: string }) => {
  const { errors } = useFormState({ name: props.name });

  return (
    <p className='min-h-[1.25rem] text-brand-crimson text-sm'>
      {errors[props.name]?.message as string}
    </p>
  );
};

export default FormError;
