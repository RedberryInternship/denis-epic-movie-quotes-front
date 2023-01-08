import { ModalButton } from 'components';

const FormSubmitButton = ({
  label,
  isLoading,
}: {
  label: string;
  isLoading: boolean;
}) => {
  return (
    <ModalButton
      label={isLoading ? 'Loading...' : label}
      disabled={isLoading}
    />
  );
};

export default FormSubmitButton;
