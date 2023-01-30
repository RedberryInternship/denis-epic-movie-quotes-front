import { useRouter } from 'next/router';
import { sendLogoutRequest } from 'services';

export const useNavbar = () => {
  const router = useRouter();
  const logout = async () => {
    await sendLogoutRequest();
    await router.push('/');
  };

  return { logout };
};
