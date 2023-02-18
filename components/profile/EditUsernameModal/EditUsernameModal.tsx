import { ProfileModalWrapper, TextInput } from 'components';
import { SetState } from 'types';
import { useEditUsernameModal } from './useEditUsernameModal';

const EditUsernameModal = (props: {
  setUsernameModalIsOpen: SetState<boolean>;
}) => {
  const { isLoading, handleSubmit, closeModalCallback, t } =
    useEditUsernameModal(props.setUsernameModalIsOpen);

  return (
    <ProfileModalWrapper
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      closeModalCallback={closeModalCallback}
    >
      <TextInput
        name='username'
        label={t('enter_username')}
        placeholder={t('enter_username')}
        isBig={true}
      />
    </ProfileModalWrapper>
  );
};

export default EditUsernameModal;
