const FeaturedQuote = (props: {
  backgroundClass: string;
  quote: string;
  caption: string;
}) => {
  return (
    <div className='relative h-[58vh] lg:h-screen'>
      <div className='relative flex flex-col pl-15 pr-[17vw] justify-center h-full z-10 bg-gradient-shadow lg:pr-[33vw] 2xl:pr-[50vw] font-bold lg:pl-[9vw]'>
        <div className='relative text-xl lg:text-5xl leading-normal lg:leading-normal mb-4'>
          <span className='absolute -left-6 lg:-left-16 font-thin'>—</span>
          {props.quote}
        </div>
        <div className='text-brand-lightgray lg:text-3xl'>{props.caption}</div>
      </div>
      <div
        className={`${props.backgroundClass} h-[58vh] lg:h-screen w-full z-0 top-0 absolute bg-cover bg-center lg:bg-fixed`}
      ></div>
    </div>
  );
};

export default FeaturedQuote;
