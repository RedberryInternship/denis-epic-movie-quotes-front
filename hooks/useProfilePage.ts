import { ApiResponse, UserFromDatabase } from 'types';
import { useUserStore } from 'hooks';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { getUser, verifyEmail } from 'services';
import { useEffect, useState } from 'react';
import { setUser } from 'store';
import { useRouter } from 'next/router';
import { showToast } from 'helpers';

export const useProfilePage = (initialUser: UserFromDatabase) => {
  const user = useUserStore(initialUser);
  const { data: userData, refetch } = useQuery('user', () => getUser(), {
    initialData: initialUser,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(userData as UserFromDatabase));
  }, [dispatch, userData]);

  const [usernameModalIsOpen, setUsernameModalIsOpen] = useState(false);
  const [passwordModalIsOpen, setPasswordModalIsOpen] = useState(false);
  const [isAddingEmail, setIsAddingEmail] = useState(false);
  const [isManagingEmails, setIsManagingEmails] = useState(false);

  const router = useRouter();
  const emailVerifyURL = router.query.verify_url;
  useEffect(() => {
    if (emailVerifyURL) {
      const sendEmailVerifyRequest = async () => {
        const verifyRequest = await verifyEmail(emailVerifyURL.toString());
        setIsManagingEmails(true);

        delete router.query.verify_url;
        await router.replace({ query: router.query }, undefined, {
          shallow: true,
        });

        if ((verifyRequest as ApiResponse<{}>).success) {
          showToast('Email verified successfully');
        }
        await refetch();
      };
      sendEmailVerifyRequest();
    }
  }, [emailVerifyURL, refetch, router]);

  return {
    user,
    usernameModalIsOpen,
    setUsernameModalIsOpen,
    passwordModalIsOpen,
    setPasswordModalIsOpen,
    isAddingEmail,
    setIsAddingEmail,
    isManagingEmails,
    setIsManagingEmails,
  };
};
