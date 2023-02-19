import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

export const useProfileUsernameSection = (username: string) => {
  const { setValue } = useFormContext();

  useEffect(() => setValue('username', username), [setValue, username]);

  const { t } = useTranslation('profile');

  return { t };
};
