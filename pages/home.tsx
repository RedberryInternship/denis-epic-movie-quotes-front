import { getNewsfeedQuotes, getUser } from 'services';
import { NewsfeedQuote, PageWrapper, Pencil, Search } from 'components';
import Head from 'next/head';
import { useNewsfeedPage } from 'hooks';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { cookiesObjToStr, getRequestOriginFromHeaders } from 'helpers';
import {
  CursorPaginatedResponse,
  NewsfeedQuote as NewsfeedQuoteType,
  UserFromDatabase,
} from 'types';

const Home = (props: {
  user: UserFromDatabase;
  initialQuotes: CursorPaginatedResponse<NewsfeedQuoteType[] | []>;
}) => {
  const { user, paginatedQuotes, bottomRef } = useNewsfeedPage(
    props.user,
    props.initialQuotes
  );

  return (
    <>
      <Head>
        <title>Newsfeed - Movie Quotes</title>
      </Head>

      <PageWrapper user={user} displaySearchButton={true}>
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

          <div className='flex flex-col gap-8 lg:gap-10'>
            {!paginatedQuotes?.pages[0].data.length && (
              <div className='text-2xl lg:text-4xl text-center mt-5 p-8 lg:p-12'>
                There are no quotes yet!
              </div>
            )}
            {paginatedQuotes?.pages.map(({ data }, index) => (
              <div key={index} className='flex flex-col gap-8 lg:gap-10'>
                {data.map((quote) => {
                  return <NewsfeedQuote key={quote.id} {...quote} />;
                })}
              </div>
            ))}
          </div>

          <div ref={bottomRef} className='h-1'></div>
        </section>
      </PageWrapper>
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
    const initialQuotes = await getNewsfeedQuotes('', cookies, origin);
    return {
      props: {
        user,
        initialQuotes,
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
