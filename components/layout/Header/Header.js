/** Dependencies **/
import Link from "next/link";

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/features">Features</Link>
      </li>
      <li>
        <Link href="/pricing">Pricing</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/auth/login">Login</Link>
      </li>
      <li>
        <Link href="/auth/signup">Signup</Link>
      </li>
    </ul>
  </header>
);
