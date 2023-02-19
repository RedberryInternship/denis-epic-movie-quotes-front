import { ProfileModalWrapper, TextInput } from 'components';
import { SetState } from 'types';
import { useAddEmailModal } from './useAddEmailModal';

const AddEmailModal = (props: { setIsAddingEmail: SetState<boolean> }) => {
  const { isLoading, handleSubmit, closeModalCallback, t } = useAddEmailModal(
    props.setIsAddingEmail
  );

  return (
    <ProfileModalWrapper
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      closeModalCallback={closeModalCallback}
    >
      <TextInput
        name='email'
        label={t('new_email')}
        placeholder={t('enter_email')}
        isBig={true}
      />
    </ProfileModalWrapper>
  );
};

export default AddEmailModal;
