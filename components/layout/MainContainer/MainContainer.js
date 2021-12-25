/** Components **/
import { Header } from '../Header';
import { Footer } from '../Footer';

/** Styles **/
import styles from './MainContainer.module.scss';

export const MainContainer = props => (
  <>
    <Header/>
    <main className={styles['main-container']}>{props.children}</main>
    <Footer/>
  </>
);
