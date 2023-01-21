import { ErrorPage, Gandalf } from 'components';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Forbidden = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`${t('forbidden_page_title')} - Movie Quotes`}</title>
      </Head>
      <ErrorPage
        iconComponent={<Gandalf />}
        title='You shall not pass!'
        subtitle={t('forbidden_login')}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default Forbidden;
