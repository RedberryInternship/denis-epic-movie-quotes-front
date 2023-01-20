import { getUser } from 'services';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { cookiesObjToStr, getRequestOriginFromHeaders } from 'helpers';
import { UserFromDatabase } from 'types';
import { useNewsfeedPage } from '../hooks';

const Home = (props: { user: UserFromDatabase }) => {
  const { user } = useNewsfeedPage(props.user);

  return (
    <>
      <Head>
        <title>Newsfeed - Movie Quotes</title>
      </Head>

      <main></main>
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
        ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
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

export default Home;
