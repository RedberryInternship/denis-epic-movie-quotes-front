import { getUser } from 'services';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { cookiesObjToStr, getRequestOriginFromHeaders } from 'helpers';
import { UserFromDatabase } from 'types';
import { useNewsfeedPage } from 'hooks';
import { Navbar, Pencil, Search, SideMenu } from 'components';

const Home = (props: { user: UserFromDatabase }) => {
  const { user, logout, toggleSideMenuIsOpen, sideMenuRef, sideMenuIsOpen } =
    useNewsfeedPage(props.user);

  return (
    <>
      <Head>
        <title>Newsfeed - Movie Quotes</title>
      </Head>

      <Navbar logout={logout} toggleSideMenuIsOpen={toggleSideMenuIsOpen} />

      <main className='bg-brand-lightbackground text-white min-h-screen pt-8 lg:flex pb-32'>
        <SideMenu
          sideMenuIsOpen={sideMenuIsOpen}
          sideMenuRef={sideMenuRef}
          username={user.username}
        />
        <section className='lg:w-1/2'>
          <div className='flex lg:h-13 lg:mb-5.5'>
            <button className='flex gap-3 mb-10.5 ml-9 lg:bg-brand-btn-background lg:h-full lg:w-full lg:ml-0 lg:rounded-1.5lg lg:pl-4.5 items-center'>
              <Pencil />
              <span>Write new quote</span>
            </button>
            <button className='hidden lg:flex gap-4 opacity-70 pl-6 pr-2 min-w-max items-center text-xl'>
              <div className='w-5 h-5'>
                <Search />
              </div>
              Search by
            </button>
          </div>

          <div className='flex flex-col gap-8 lg:gap-10'></div>
        </section>
      </main>
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
