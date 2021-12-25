/** Next core **/
import Link from "next/link";
/** Components **/
import { MainMenu } from '../../MainMenu';

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <MainMenu/>
  </header>
);
