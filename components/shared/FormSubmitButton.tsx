const FormSubmitButton = ({
  label,
  isLoading,
}: {
  label: string;
  isLoading: boolean;
}) => {
  return (
    <button
      className='w-full bg-brand-red h-9.5 mt-1 mb-2 rounded disabled:bg-brand-crimson'
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : label}
    </button>
  );
};

export default FormSubmitButton;
