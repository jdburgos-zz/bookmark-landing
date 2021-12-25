/** Next core **/
import Head from 'next/head';

/** Components **/
import { MainContainer } from '../components/layout/MainContainer';

/** Styles **/
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  const { title } = pageProps;

  return (
    <div>
      <Head>
        <title>Bookmark - Landing - { title }</title>
        <meta name="description" content="Bookmark Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </div>
  );
}
