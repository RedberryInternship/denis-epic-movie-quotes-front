import Head from 'next/head';
import { Genre, MovieQuote, MovieWithGenres, UserFromDatabase } from 'types';
import { GetServerSidePropsContext } from 'next';
import { cookiesObjToStr, getRequestOriginFromHeaders } from 'helpers';
import { getGenres, getMovie, getUser } from 'services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  AddOrEditMovieModal,
  Bin,
  EditPencil,
  FormWrapper,
  PageWrapper,
  PlusButton,
} from 'components';
import { useMoviePage } from 'hooks';
import Image from 'next/image';

const Movie = (props: {
  user: UserFromDatabase;
  movie: MovieWithGenres;
  quotes: MovieQuote[];
  genres: Genre[];
}) => {
  const {
    user,
    isEditing,
    setIsEditing,
    movie,
    quotes,
    currentFormValues,
    locale,
  } = useMoviePage(props.user, props.movie, props.quotes);

  return (
    <>
      <Head>
        <title>Movie List - Movie Quotes</title>
      </Head>

      {isEditing && (
        <FormWrapper defaultValues={currentFormValues}>
          <AddOrEditMovieModal
            user={user}
            genres={props.genres}
            setModalIsOpen={setIsEditing}
            movieID={movie?.id}
            isEditing={true}
          />
        </FormWrapper>
      )}

      <PageWrapper user={user}>
        <div
          className={
            'w-full ' + (isEditing ? 'lg:opacity-50 pointer-events-none' : '')
          }
        >
          <section className='px-9 w-full'>
            <h1 className='hidden lg:block font-medium text-2xl mb-8'>
              Movie description
            </h1>
            <div className='lg:flex gap-5 w-full'>
              <Image
                className='mt-2 lg:mt-0 mx-auto mb-6 aspect-[20/17] rounded-xl object-cover h-[302px] lg:aspect-[20/11] lg:w-[35vw] 2xl:w-[42vw] lg:h-auto 2xl:max-w-[809px] 2xl:h-[441px]'
                src={movie!.image}
                width={809}
                height={441}
                alt='Movie image'
                priority
              />
              <div className='lg:pr-9 w-full'>
                <div className='flex justify-between items-center mb-6 gap-3'>
                  <h2 className='text-xl text-brand-khaki lg:text-2xl lg:text-medium'>
                    {movie?.title[locale]} ({movie?.release_year})
                  </h2>
                  <div className='hidden lg:flex bg-[#1F1C2A] items-center justify-evenly rounded-lg mr-1 min-w-[144px] w-36 h-10'>
                    <button
                      onClick={() => setIsEditing(true)}
                      className='hover:text-brand-crimson w-full h-full flex justify-center items-center hover:scale-125 transition'
                    >
                      <EditPencil />
                    </button>
                    <span className='bg-brand-subtitle h-4 w-px'></span>
                    <button className='hover:text-brand-crimson w-full h-full flex justify-center items-center hover:scale-125 transition'>
                      <Bin />
                    </button>
                  </div>
                </div>

                <div className='flex flex-wrap gap-2 mb-2'>
                  {movie?.genres.map((genre) => (
                    <span
                      className='inline-flex rounded font-bold text-lg items-center px-3 h-7.5 bg-brand-subtitle'
                      key={genre.id}
                    >
                      {genre.name[locale]}
                    </span>
                  ))}
                </div>

                <div className='p-3 text-lg mb-8'>
                  <div className='flex gap-3'>
                    <div className='flex flex-col gap-5 justify-between font-medium'>
                      <span className='font-bold text-brand-pale'>
                        Director:
                      </span>
                      <span className='font-bold text-brand-pale'>Budget:</span>
                    </div>
                    <div className='flex flex-col gap-5'>
                      <span>{movie?.director[locale]}</span>
                      <span>$2.000.000</span>
                    </div>
                  </div>
                  <p className='text-brand-pale mt-5'>
                    {movie?.description[locale]}
                  </p>
                </div>
              </div>
            </div>

            <button
              type='button'
              className='flex items-center px-[13px] gap-2 bg-brand-red rounded min-h-[38px] h-full lg:text-xl lg:h-12 min-w-max transition hover:scale-105 active:text-brand-red active:bg-white'
              onClick={() => {}}
            >
              <PlusButton />
              Add quote
            </button>

            <hr className='my-10 border-brand-divide border-t-1.5' />
            <h4 className='text-2xl'>
              {quotes?.length ? 'All Quotes' : 'No quotes yet'}
            </h4>
            <h5 className='mb-9'>
              {quotes?.length ? `(Total ${quotes?.length})` : ''}
            </h5>
          </section>
        </div>
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
    const { id } = context.query;
    const movieResponse = await getMovie(id as string, cookies, origin);
    const genreResponse = await getGenres(cookies, origin);
    return {
      props: {
        user,
        movie: movieResponse.data.movie,
        quotes: movieResponse.data.quotes,
        genres: genreResponse.data,
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

export default Movie;
