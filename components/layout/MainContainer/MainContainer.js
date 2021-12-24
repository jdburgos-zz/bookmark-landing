/** Components **/
import { Header } from '../Header';

/** Styles **/
import styles from './MainContainer.module.scss';

export const MainContainer = props => (
  <>
    <Header />
    <main className={styles['main-container']}>{props.children}</main>
    <footer>Footer component</footer>
  </>
);
