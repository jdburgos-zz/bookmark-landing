/** Next core **/
import Image from 'next/image';
import Link from "next/link";

/** Components **/
import { MainMenu } from '../../MainMenu';

/** Styles **/
import styles from './Header.module.scss';

/** Assets **/
import Logo from '../../../public/images/logo-bookmark.svg'

export const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a>
        <Image
          src={Logo}
          alt="Bookmark"
          priority
        />
      </a>
    </Link>
    <MainMenu/>
  </header>
);
