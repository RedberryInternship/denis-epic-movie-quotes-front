import { ProfileModalWrapper, TextInput } from 'components';
import { SetState } from 'types';
import { useEditUsernameModal } from './useEditUsernameModal';

const EditUsernameModal = (props: {
  setUsernameModalIsOpen: SetState<boolean>;
}) => {
  const { isLoading, handleSubmit, closeModalCallback } = useEditUsernameModal(
    props.setUsernameModalIsOpen
  );

  return (
    <ProfileModalWrapper
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      closeModalCallback={closeModalCallback}
    >
      <TextInput
        name='username'
        label='Enter new username'
        placeholder='Enter new username'
        isBig={true}
      />
    </ProfileModalWrapper>
  );
};

export default EditUsernameModal;
