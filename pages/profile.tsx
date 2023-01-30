import Head from 'next/head';
import { useProfilePage } from 'hooks';
import { UserFromDatabase } from 'types';
import { GetServerSidePropsContext } from 'next';
import { cookiesObjToStr, getRequestOriginFromHeaders } from 'helpers';
import { getUser } from 'services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ChangePasswordModal,
  EditUsernameModal,
  FormWrapper,
  PageWrapper,
  ProfileForm,
} from 'components';

const Profile = (props: { user: UserFromDatabase }) => {
  const {
    user,
    usernameModalIsOpen,
    setUsernameModalIsOpen,
    setPasswordModalIsOpen,
    passwordModalIsOpen,
  } = useProfilePage(props.user);

  return (
    <>
      <Head>
        <title>Profile - Movie Quotes</title>
      </Head>

      {usernameModalIsOpen && (
        <FormWrapper>
          <EditUsernameModal setUsernameModalIsOpen={setUsernameModalIsOpen} />
        </FormWrapper>
      )}

      {passwordModalIsOpen && (
        <FormWrapper>
          <ChangePasswordModal
            setPasswordModalIsOpen={setPasswordModalIsOpen}
          />
        </FormWrapper>
      )}

      <div>
        <PageWrapper user={user} displaySearchButton={false}>
          <FormWrapper
            defaultValues={{ username: user.username, current_password: '' }}
          >
            <ProfileForm
              user={user}
              setUsernameModalIsOpen={setUsernameModalIsOpen}
              setPasswordModalIsOpen={setPasswordModalIsOpen}
            />
          </FormWrapper>
        </PageWrapper>
      </div>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookies = cookiesObjToStr(context.req.cookies);
  const origin = getRequestOriginFromHeaders(context.req.headers);

  try {
    const user = await getUser(cookies, origin);
    return {
      props: {
        user,
        ...(await serverSideTranslations(context.locale ?? 'en', [
          'common',
          'auth',
        ])),
      },
    };
  } catch (error) {
    return {
      props: {},
      redirect: {
        destination: '/403',
        permanent: false,
      },
    };
  }
};

export default Profile;
