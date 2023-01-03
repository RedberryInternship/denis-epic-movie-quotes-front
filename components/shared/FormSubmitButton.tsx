const FormSubmitButton = ({ label }: { label: string }) => {
  return (
    <button className='w-full bg-brand-red h-9.5 mt-1 mb-2 rounded'>
      {label}
    </button>
  );
};

export default FormSubmitButton;
