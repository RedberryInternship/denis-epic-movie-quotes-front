import Head from 'next/head';
import { useProfilePage } from 'hooks';
import { UserFromDatabase } from 'types';
import { GetServerSidePropsContext } from 'next';
import { cookiesObjToStr, getRequestOriginFromHeaders } from 'helpers';
import { getUser } from 'services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  AddEmailModal,
  ChangePasswordModal,
  EditUsernameModal,
  FormWrapper,
  PageWrapper,
  ProfileForm,
  ProfileManageEmailsModal,
} from 'components';

const Profile = (props: { user: UserFromDatabase }) => {
  const {
    user,
    usernameModalIsOpen,
    setUsernameModalIsOpen,
    setPasswordModalIsOpen,
    passwordModalIsOpen,
    isAddingEmail,
    setIsAddingEmail,
    isManagingEmails,
    setIsManagingEmails,
  } = useProfilePage(props.user);

  return (
    <>
      <Head>
        <title>Profile - Movie Quotes</title>
      </Head>

      {isManagingEmails && (
        <FormWrapper>
          <ProfileManageEmailsModal
            emails={user.emails}
            setIsAddingEmail={setIsAddingEmail}
          />
        </FormWrapper>
      )}

      {isAddingEmail && (
        <FormWrapper>
          <AddEmailModal setIsAddingEmail={setIsAddingEmail} />
        </FormWrapper>
      )}

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

      <div className={isAddingEmail ? 'lg:blur-sm lg:opacity-95' : ''}>
        <PageWrapper user={user}>
          <FormWrapper
            defaultValues={{ username: user.username, current_password: '' }}
          >
            <ProfileForm
              user={user}
              isManagingEmails={isManagingEmails}
              setIsAddingEmail={setIsAddingEmail}
              setIsManagingEmails={setIsManagingEmails}
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
