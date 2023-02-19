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
import {
  changePasswordSchema,
  emailSchema,
  profileSchema,
  usernameSchema,
} from 'schema';

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
        <ProfileManageEmailsModal
          emails={user.emails}
          setIsAddingEmail={setIsAddingEmail}
        />
      )}

      {isAddingEmail && (
        <FormWrapper schema={emailSchema}>
          <AddEmailModal setIsAddingEmail={setIsAddingEmail} />
        </FormWrapper>
      )}

      {usernameModalIsOpen && (
        <FormWrapper schema={usernameSchema}>
          <EditUsernameModal setUsernameModalIsOpen={setUsernameModalIsOpen} />
        </FormWrapper>
      )}

      {passwordModalIsOpen && (
        <FormWrapper schema={changePasswordSchema}>
          <ChangePasswordModal
            setPasswordModalIsOpen={setPasswordModalIsOpen}
          />
        </FormWrapper>
      )}

      <div
        className={
          isAddingEmail ? 'lg:absolute lg:w-full lg:blur-sm lg:opacity-95' : ''
        }
      >
        <PageWrapper user={user}>
          <FormWrapper
            schema={profileSchema}
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
          'profile',
          'validation',
        ])),
      },
    };
  } catch (error) {
    const { verify_url } = context.query;

    return {
      props: {},
      redirect: {
        destination: verify_url
          ? `/?verify_url=${encodeURIComponent(verify_url as string)}`
          : '/403',
        permanent: false,
      },
    };
  }
};

export default Profile;
