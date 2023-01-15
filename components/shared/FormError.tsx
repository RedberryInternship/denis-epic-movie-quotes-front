const FormError = (props: { error: string }) => {
  return (
    <p className='min-h-[1.25rem] text-brand-crimson text-sm'>{props.error}</p>
  );
};

export default FormError;
