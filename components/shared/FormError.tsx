import { useTranslation } from 'next-i18next';

const FormError = (props: { error: string }) => {
  const { t } = useTranslation('validation');

  return (
    <p className='min-h-[1.25rem] text-brand-crimson text-sm'>
      {t(props.error)}
    </p>
  );
};

export default FormError;
