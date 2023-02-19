import { getNewsfeedQuotes, getUser } from 'services';
import { NewsfeedInputs, NewsfeedQuote, PageWrapper } from 'components';
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
import { Fragment } from 'react';

const Home = (props: {
  user: UserFromDatabase;
  initialQuotes: CursorPaginatedResponse<NewsfeedQuoteType[] | []>;
}) => {
  const {
    user,
    paginatedQuotes,
    bottomRef,
    searchIsActive,
    setSearchIsActive,
    searchQuery,
    setSearchQuery,
    t,
  } = useNewsfeedPage(props.user, props.initialQuotes);

  return (
    <>
      <Head>
        <title>{t('newsfeed')} - Movie Quotes</title>
      </Head>

      <PageWrapper
        user={user}
        searchBarProps={{
          searchIsActive,
          setSearchIsActive,
          searchQuery,
          setSearchQuery,
        }}
      >
        <section className='lg:w-1/2'>
          <NewsfeedInputs
            searchIsActive={searchIsActive}
            setSearchIsActive={setSearchIsActive}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className='flex flex-col gap-8 lg:gap-10'>
            {!paginatedQuotes?.pages[0].data.length && (
              <div className='text-xl lg:text-3xl text-center mt-5 p-8 lg:p-12'>
                {searchQuery ? t('no_quotes_search') : t('newsfeed_no_quotes')}
              </div>
            )}
            {paginatedQuotes?.pages.map(({ data }, index) => (
              <Fragment key={index}>
                {data.map((quote) => {
                  return (
                    <NewsfeedQuote key={quote.id} {...quote} page={index} />
                  );
                })}
              </Fragment>
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
    const initialQuotes = await getNewsfeedQuotes('', '', cookies, origin);
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
