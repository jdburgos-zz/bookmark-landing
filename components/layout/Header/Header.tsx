/** Components **/
import { MainMenu } from '@components/MainMenu';
import { Logo } from '@components/Logo';

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Logo />
    <MainMenu />
  </header>
);
