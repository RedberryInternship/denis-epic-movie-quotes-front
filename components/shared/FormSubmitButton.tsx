import { ModalButton } from 'components';
import { useTranslation } from 'next-i18next';

const FormSubmitButton = (props: { label: string; isLoading: boolean }) => {
  const { t } = useTranslation('common');

  return (
    <ModalButton
      label={props.isLoading ? t('loading') : props.label}
      disabled={props.isLoading}
    />
  );
};

export default FormSubmitButton;
