/** Next core **/
import Link from 'next/link';

/** Styles **/
import styles from './Footer.module.scss';

/** Assets **/
import { LogoBookmark } from '@images/LogoBookmark';
import { TwitterIcon } from '@images/TwitterIcon';
import { FacebookIcon } from '@images/FacebookIcon';

export const Footer = () => {
  const MENU_ITEMS = [
    { url: '/features', name: 'FEATURES' },
    { url: '/pricing', name: 'PRICING' },
    { url: '/contact', name: 'CONTACT' },
  ];
  const SOCIAL_ITEMS = [
    { icon: <FacebookIcon />, name: 'Facebook', url: 'https://www.facebook.com' },
    { icon: <TwitterIcon />, name: 'Twitter', url: 'https://www.twitter.com' },
  ];

  const menuItems = MENU_ITEMS.map(({ url, name }, index) => (
    <li key={index} className={styles['footer__nav-item']}>
      <Link href={url}>
        <a className={styles['footer__nav-link']}>{name}</a>
      </Link>
    </li>
  ));

  const socialItems = SOCIAL_ITEMS.map(({ icon, name, url }, index) => (
    <li key={index} className={styles['footer__social-item']}>
      <a href={url} target="_blank" rel="noreferrer" className={styles['footer__social-link']}>
        {icon}
      </a>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <Link href="/">
          <a className={styles.logo}>
            <LogoBookmark fill="#FFF" />
          </a>
        </Link>
      </div>
      <ul className={styles.footer__nav}>{menuItems}</ul>
      <ul className={styles.footer__social}>{socialItems}</ul>
    </footer>
  );
};
