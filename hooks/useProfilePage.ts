import { UserFromDatabase } from 'types';
import { useUserStore } from 'hooks';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { getUser } from 'services';
import { useEffect } from 'react';
import { setUser } from 'store';

export const useProfilePage = (initialUser: UserFromDatabase) => {
  const user = useUserStore(initialUser);
  const { data: userData } = useQuery('user', () => getUser(), {
    initialData: initialUser,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(userData as UserFromDatabase));
  }, [dispatch, userData]);

  return {
    user,
  };
};
