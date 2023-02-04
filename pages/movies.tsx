import Head from 'next/head';
import { Genre, MovieWithQuoteCount, UserFromDatabase } from 'types';
import { GetServerSidePropsContext } from 'next';
import { cookiesObjToStr, getRequestOriginFromHeaders } from 'helpers';
import { getGenres, getMovies, getUser } from 'services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  AddMovieModal,
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
  } = useMoviesPage(props.user, props.movies);

  return (
    <>
      <Head>
        <title>Movie List - Movie Quotes</title>
      </Head>

      {addMovieModalIsOpen && (
        <FormWrapper>
          <AddMovieModal
            user={user}
            genres={props.genres}
            setAddMovieModalIsOpen={setAddMovieModalIsOpen}
          />
        </FormWrapper>
      )}

      <PageWrapper user={user}>
        <section
          className={
            'px-[35px] lg:pl-12 2xl:pl-0 lg:pr-17.5 lg:w-full ' +
            (addMovieModalIsOpen ? 'lg:opacity-50' : '')
          }
        >
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
                onClick={() => setAddMovieModalIsOpen(true)}
              >
                <PlusButton />
                Add Movie
              </button>
            </div>
          </div>
          <div className='mt-2 font-medium max-w-[358px] mx-auto lg:hidden'>
            (Total {props.movies.length})
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
                <div className='text-xl mt-10'>
                  No quotes match your search query!
                </div>
              ) : (
                <div className='text-xl mt-10'>
                  You haven&apos;t added any movies yet!
                </div>
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
