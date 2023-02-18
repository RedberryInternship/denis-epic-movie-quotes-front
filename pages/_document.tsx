import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import i18nextConfig from '../next-i18next.config';

export default function Document(props: DocumentProps) {
  return (
    <Html
      className='snap-y snap-mandatory'
      lang={props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale}
    >
      <Head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
