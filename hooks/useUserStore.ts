import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState, setUser } from 'store';
import { UserFromDatabase } from 'types';

export const useUserStore = (userData: UserFromDatabase) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(userData));
  }, [dispatch, userData]);
  return useSelector((state: RootState) => state.user);
};
