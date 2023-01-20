import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setUser } from 'store';
import { UserFromDatabase } from 'types';

export const useNewsfeedPage = (userData: UserFromDatabase) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(userData));
  }, [dispatch, userData]);
  const user = useSelector((state: RootState) => state.user);

  return {
    user,
  };
};
