/** Next core **/
import Head from 'next/head';
import type { AppProps } from 'next/app';

/** Components **/
import { MainContainer } from '../components/layout/MainContainer';

/** Styles **/
import '../styles/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  const { title } = pageProps;

  return (
    <div>
      <Head>
        <title>Bookmark - Landing - {title}</title>
        <meta name="description" content="Bookmark Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </div>
  );
}
