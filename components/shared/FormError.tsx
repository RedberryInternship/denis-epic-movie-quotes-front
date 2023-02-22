import { useTranslation } from 'next-i18next';

const FormError = (props: { error: string }) => {
  const { t } = useTranslation('validation');

  return (
    <p className='text-brand-crimson text-sm min-h-[1.25rem]'>
      {t(props.error)}
    </p>
  );
};

export default FormError;
