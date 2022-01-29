/** Next core **/
import Image from 'next/image';
import Link from 'next/link';

/** Styles **/
import styles from './Footer.module.scss';

/** Assets **/
import Logo from '../../../public/images/logo-bookmark.svg';
import FacebookIcon from '../../../public/images/icon-facebook.svg';
import TwitterIcon from '../../../public/images/icon-twitter.svg';

export const Footer = () => {
  const MENU_ITEMS = [
    { url: '/features', name: 'Features' },
    { url: '/pricing', name: 'Pricing' },
    { url: '/contact', name: 'Contact' },
  ];

  const menuItems = MENU_ITEMS.map(({ url, name }, index) => (
    <li key={index}>
      <Link href={url}>{name}</Link>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <Image src={Logo} alt="Bookmark" priority />
      <ul>{menuItems}</ul>
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Image src={FacebookIcon} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Image src={TwitterIcon} alt="Twitter" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
