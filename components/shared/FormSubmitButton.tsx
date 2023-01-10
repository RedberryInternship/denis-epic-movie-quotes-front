import { ModalButton } from 'components';

const FormSubmitButton = (props: { label: string; isLoading: boolean }) => {
  return (
    <ModalButton
      label={props.isLoading ? 'Loading...' : props.label}
      disabled={props.isLoading}
    />
  );
};

export default FormSubmitButton;
