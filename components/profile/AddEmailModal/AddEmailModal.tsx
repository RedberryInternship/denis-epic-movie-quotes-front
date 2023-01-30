import { ProfileModalWrapper, TextInput } from 'components';
import { SetState } from 'types';
import { useAddEmailModal } from './useAddEmailModal';

const AddEmailModal = (props: { setIsAddingEmail: SetState<boolean> }) => {
  const { isLoading, handleSubmit, closeModalCallback } = useAddEmailModal(
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
        label='New Email'
        placeholder='Enter new email'
        isBig={true}
        validationRules={{
          required: 'email_required',
          pattern: {
            value: /^(.+)@(.+)$/,
            message: 'email_invalid',
          },
        }}
      />
    </ProfileModalWrapper>
  );
};

export default AddEmailModal;
