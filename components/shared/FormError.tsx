import { useTranslation } from 'next-i18next';

const FormError = (props: { error: string; animated?: boolean }) => {
  const { t } = useTranslation('validation');

  return (
    <p
      className={
        'text-brand-crimson text-sm ' +
        (props.error && props.animated
          ? '!h-[1.25rem] mb-2 -mt-2 opacity-100 '
          : '') +
        (props.animated ? 'transition-all duration-200 h-0' : 'min-h-[1.25rem]')
      }
    >
      {t(props.error)}
    </p>
  );
};

export default FormError;
