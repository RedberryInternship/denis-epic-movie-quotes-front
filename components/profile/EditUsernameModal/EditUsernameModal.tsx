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
        validationRules={{
          required: 'username_required',
          minLength: {
            value: 3,
            message: 'min_length_3',
          },
          maxLength: {
            value: 15,
            message: 'max_length_16',
          },
          pattern: {
            value: /^[a-z0-9_\-]+$/,
            message: 'only_lowercase_and_numbers',
          },
        }}
      />
    </ProfileModalWrapper>
  );
};

export default EditUsernameModal;
