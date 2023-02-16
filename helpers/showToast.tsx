import toast from 'react-hot-toast';
import { ProfileToast } from 'components';

export const showToast = (message: string, title?: string) => {
  toast.custom(
    (t) => <ProfileToast toast={t} message={message} title={title} />,
    {
      duration: 5_000,
    }
  );
};
