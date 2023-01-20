import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useOutsideClickListener, useToggle } from 'hooks';
import { RootState, setUser } from 'store';
import { sendLogoutRequest } from 'services';
import { UserFromDatabase } from 'types';

export const useNewsfeedPage = (userData: UserFromDatabase) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(userData));
  }, [dispatch, userData]);
  const user = useSelector((state: RootState) => state.user);

  const router = useRouter();
  const logout = async () => {
    await sendLogoutRequest();
    await router.push('/');
  };

  const [sideMenuIsOpen, toggleSideMenuIsOpen] = useToggle(false);
  const sideMenuRef = useRef(null);
  useOutsideClickListener(sideMenuRef, () => {
    if (sideMenuIsOpen) toggleSideMenuIsOpen();
  });

  return {
    user,
    logout,
    sideMenuRef,
    sideMenuIsOpen,
    toggleSideMenuIsOpen,
  };
};
