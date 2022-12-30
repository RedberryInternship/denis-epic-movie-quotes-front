import Head from 'next/head';
import { ArrowDown, FeaturedQuote } from 'components';

const Home = () => {
  return (
    <>
      <Head>
        <title>Movie Quotes</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <nav className='flex items-center w-full text-white justify-between px-9 py-6 lg:px-20 fixed z-50'>
        <span className='text-brand-khaki uppercase font-medium'>
          Movie Quotes
        </span>
        <div className='flex gap-4'>
          <span className='hidden lg:flex items-center gap-2.5 px-6 cursor-pointer'>
            Eng
            <span className='h-4 w-4 flex justify-center items-center pt-1'>
              <ArrowDown />
            </span>
          </span>
          <button className='h-9.5 px-6 bg-brand-red rounded hidden lg:inline-block'>
            Sign Up
          </button>
          <button className='h-9.5 px-6.5 border border-white rounded'>
            Log in
          </button>
        </div>
      </nav>
      <main className='w-full bg-brand-background text-white'>
        <div className='h-[66vh] w-2/3 flex flex-col items-center pt-[16vh] lg:pt-[26vh] lg:w-5/12 2xl:w-1/3 mx-auto gap-8 lg:h-screen lg:gap-6'>
          <h1 className='text-brand-khaki font-bold text-2xl leading-normal text-center lg:text-5xl 2xl:text-6xl lg:leading-normal 2xl:leading-normal'>
            Find any quote in millions of movie lines
          </h1>
          <button className='bg-brand-red rounded px-3.5 h-9.5 lg:text-xl lg:h-12 lg:px-4'>
            Get Started
          </button>
        </div>
        <FeaturedQuote
          backgroundClass='bg-[url("/assets/interstellar.png")]'
          quote='“You have to leave something behind to go forward”'
          caption='Interstellar, 2014'
        />
        <FeaturedQuote
          backgroundClass='bg-[url("/assets/the-royal-tenendaums.png")]'
          quote='“I think we’re just gonna have to be secretly in love with each other and leave it that”'
          caption='The Royal Tenenbaums,2001'
        />
        <FeaturedQuote
          backgroundClass='bg-[url("/assets/lord-of-the-rings.png")]'
          quote='“I see in your eyes the same fear that would take the heart of me....”'
          caption='The Lord of the Rings, 2003'
        />
        <footer className='flex items-center h-8 px-8.5 uppercase font-medium text-2xs text-brand-khaki lg:text-xs lg:h-12 lg:px-17.5'>
          © 2022 movie quotes. All rights reserved.
        </footer>
      </main>
    </>
  );
};

export default Home;
