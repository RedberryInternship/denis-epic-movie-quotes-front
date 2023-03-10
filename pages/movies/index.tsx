import Head from 'next/head';
import { Genre, MovieWithQuoteCount, UserFromDatabase } from 'types';
import { GetServerSidePropsContext } from 'next';
import { cookiesObjToStr, getRequestOriginFromHeaders } from 'helpers';
import { getGenres, getMovies, getUser } from 'services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  AddOrEditMovieModal,
  FormWrapper,
  MovieItem,
  PageWrapper,
  PlusButton,
  SearchBar,
} from 'components';
import { useMoviesPage } from 'hooks';

const Movies = (props: {
  user: UserFromDatabase;
  movies: MovieWithQuoteCount[];
  genres: Genre[];
}) => {
  const {
    user,
    movies,
    handleSearchInputChange,
    resetSearch,
    setSearchIsActive,
    searchQuery,
    searchIsActive,
    addMovieModalIsOpen,
    setAddMovieModalIsOpen,
    closeModal,
    t,
  } = useMoviesPage(props.user, props.movies);

  return (
    <>
      <Head>
        <title>{t('movie_list')} - Movie Quotes</title>
      </Head>

      {addMovieModalIsOpen && (
        <FormWrapper>
          <AddOrEditMovieModal
            user={user}
            genres={props.genres}
            closeModal={closeModal}
          />
        </FormWrapper>
      )}

      <PageWrapper user={user}>
        <section
          className={
            'px-[35px] lg:pl-12 2xl:pl-0 lg:pr-17.5 lg:w-full ' +
            (addMovieModalIsOpen ? 'lg:opacity-50 pointer-events-none' : '')
          }
        >
          <div className='-mt-4 flex justify-between items-center gap-4 max-w-[358px] lg:max-w-none mx-auto lg:mt-0'>
            <h1 className='text-2xl font-medium'>
              {t('my_list_of_movies')}
              <span className='hidden lg:inline'>
                {` (${t('total')} ${props.movies.length})`}
              </span>
            </h1>
            <div className='flex gap-8 w-max'>
              <SearchBar
                searchIsActive={searchIsActive}
                setSearchIsActive={setSearchIsActive}
                handleSearchInputChange={handleSearchInputChange}
                searchQuery={searchQuery}
                resetSearch={resetSearch}
                placeholder={t('movie_search_placeholder')}
              />
              <button
                type='button'
                className='flex items-center px-[13px] gap-2 bg-brand-red rounded min-h-[38px] h-full lg:text-xl lg:h-12 min-w-max'
                onClick={() => setAddMovieModalIsOpen(true)}
              >
                <PlusButton />
                {t('add_movie')}
              </button>
            </div>
          </div>
          <div className='mt-2 font-medium max-w-[358px] mx-auto lg:hidden'>
            ({t('total')} {props.movies.length})
          </div>
          <div className='flex flex-col items-center gap-15 mt-8.5 lg:flex-wrap lg:grid lg:grid-cols-2 2xl:grid-cols-3 lg:gap-10 2xl:gap-12.5 lg:items-start lg:justify-around'>
            {movies?.map((movie) => (
              <MovieItem
                key={movie.id}
                image={movie.image}
                title={movie.title}
                id={movie.id}
                quoteCount={movie.quotes_count}
                releaseYear={movie.release_year}
              />
            ))}
            {!movies?.length &&
              (searchQuery ? (
                <div className='text-xl mt-10'>{t('search_no_movies')}</div>
              ) : (
                <div className='text-xl mt-10'>{t('no_movies')}</div>
              ))}
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
    const genreResponse = await getGenres(cookies, origin);
    return {
      props: {
        user,
        genres: genreResponse.data,
        movies: moviesResponse.data,
        ...(await serverSideTranslations(context.locale ?? 'en', [
          'common',
          'auth',
          'validation',
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
