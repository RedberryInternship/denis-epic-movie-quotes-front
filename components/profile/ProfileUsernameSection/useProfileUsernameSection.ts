import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

export const useProfileUsernameSection = (username: string) => {
  const { setValue } = useFormContext();

  useEffect(() => setValue('username', username), [setValue, username]);
};
