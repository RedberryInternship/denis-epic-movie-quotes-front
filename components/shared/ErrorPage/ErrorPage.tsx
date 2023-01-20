import { RedButton } from 'components';
import { useErrorPage } from './useErrorPage';

const ErrorPage = (props: {
  iconComponent?: JSX.Element;
  title: string;
  subtitle: string;
}) => {
  const { redirectToHome, t } = useErrorPage();

  return (
    <main className='text-center flex flex-col items-center pt-[17vh] px-14 bg-gradient-modal h-screen w-full bg-brand-background text-white'>
      {props.iconComponent}
      <h1 className='font-bold text-2xl lg:text-5xl'>{props.title}</h1>
      <p className='mt-4 lg:mt-8 mb-8 lg:mb-14 font-medium lg:text-2xl'>
        {props.subtitle}
      </p>
      <RedButton
        onClick={redirectToHome}
        label={t('forbidden_button')}
        classNames='px-7 lg:px-4'
      />
    </main>
  );
};

export default ErrorPage;
