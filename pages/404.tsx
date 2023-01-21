import { ErrorPage, Ghost } from 'components';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Forbidden = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Movie Quotes - {t('forbidden_page_title')}</title>
        <title>{`${t('404_page_title')} - Movie Quotes`}</title>
      </Head>
      <ErrorPage
        iconComponent={<Ghost />}
        title={t('whoops')}
        subtitle={t('404_subtitle')}
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
