/** React core **/
import Link from 'next/link';

/** Components **/
import { MainMenu } from '@components/MainMenu';

/** Assets **/
import { LogoBookmark } from '@images/LogoBookmark';

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.logo}>
        <LogoBookmark fill="#242A45" />
      </a>
    </Link>
    <MainMenu />
  </header>
);
