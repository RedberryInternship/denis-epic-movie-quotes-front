import { Loading, RedButton } from 'components';
import { useProfileFormActions } from './useProfileFormActions';

const ProfileFormActions = (props: {
  disableEditing: () => void;
  handleSubmit: () => void;
  isLoading: boolean;
}) => {
  const { onCancel } = useProfileFormActions(props.disableEditing);

  return (
    <div className='flex justify-end -mt-12 mr-8 lg:mr-0 lg:mt-12 gap-8 text-xl'>
      <button type='button' className='text-brand-pale' onClick={onCancel}>
        Cancel
      </button>
      <RedButton
        onClick={props.handleSubmit}
        label={props.isLoading ? <Loading /> : 'Save changes'}
        classNames='px-4.5'
      />
    </div>
  );
};

export default ProfileFormActions;
