import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const useProfileFormActions = (disableEditing: () => void) => {
  const { reset, setValue } = useFormContext();

  const user = useSelector((state: RootState) => state.user);

  const onCancel = () => {
    disableEditing();
    reset();
    setValue('username', user.username);
  };

  return { onCancel };
};
