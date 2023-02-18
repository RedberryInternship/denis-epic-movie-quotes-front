import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useTranslation } from 'next-i18next';

export const useProfileFormActions = (disableEditing: () => void) => {
  const { reset, setValue } = useFormContext();

  const user = useSelector((state: RootState) => state.user);

  const onCancel = () => {
    disableEditing();
    reset();
    setValue('username', user.username);
  };

  const { t } = useTranslation('profile');

  return { onCancel, t };
};
