import Head from 'next/head';
import { MovieWithQuoteCount, UserFromDatabase } from 'types';
import { GetServerSidePropsContext } from 'next';
import { cookiesObjToStr, getRequestOriginFromHeaders } from 'helpers';
import { getMovies, getUser } from 'services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MovieItem, PageWrapper, PlusButton, SearchBar } from 'components';
import { useMoviesPage } from 'hooks';

const Movies = (props: {
  user: UserFromDatabase;
  movies: MovieWithQuoteCount[];
}) => {
  const {
    user,
    movies,
    handleSearchInputChange,
    resetSearch,
    setSearchIsActive,
    searchQuery,
    searchIsActive,
  } = useMoviesPage(props.user, props.movies);

  return (
    <>
      <Head>
        <title>Movie List - Movie Quotes</title>
      </Head>

      <PageWrapper user={user}>
        <section className='px-[35px] lg:pl-12 2xl:pl-0 lg:pr-17.5 lg:w-full'>
          <div className='-mt-4 flex justify-between items-center gap-4 max-w-[358px] lg:max-w-none mx-auto lg:mt-0'>
            <h1 className='text-2xl font-medium'>
              My list of movies
              <span className='hidden lg:inline'>
                {` (Total ${props.movies.length})`}
              </span>
            </h1>
            <div className='flex gap-8 w-max'>
              <SearchBar
                searchIsActive={searchIsActive}
                setSearchIsActive={setSearchIsActive}
                handleSearchInputChange={handleSearchInputChange}
                searchQuery={searchQuery}
                resetSearch={resetSearch}
                placeholder='Enter movie title'
              />
              <button
                type='button'
                className='flex items-center px-[13px] gap-2 bg-brand-red rounded min-h-[38px] h-full lg:text-xl lg:h-12 min-w-max'
                onClick={() => {}}
              >
                <PlusButton />
                Add Movie
              </button>
            </div>
          </div>
          <div className='mt-2 font-medium max-w-[358px] mx-auto lg:hidden'>
            (Total {props.movies.length})
          </div>
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
    const moviesResponse = await getMovies('', cookies, origin);
    return {
      props: {
        user,
        movies: moviesResponse.data,
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

export default Movies;
