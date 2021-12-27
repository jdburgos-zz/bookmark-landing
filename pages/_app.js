/** Next core **/
import Head from 'next/head';

/** Components **/
import { MainContainer } from '../components/layout/MainContainer';

/** Styles **/
import '../styles/styles.scss'

export default function MyApp({ Component, pageProps }) {
  const { title } = pageProps;

  return (
    <div>
      <Head>
        <title>Bookmark - Landing - { title }</title>
        <meta name="description" content="Bookmark Landing Page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </div>
  );
}
