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
    { url: '/features', name: 'FEATURES' },
    { url: '/pricing', name: 'PRICING' },
    { url: '/contact', name: 'CONTACT' },
  ];
  const SOCIAL_ITEMS = [
    { icon: FacebookIcon, name: 'Facebook', url: 'https://www.facebook.com' },
    { icon: TwitterIcon, name: 'Twitter', url: 'https://www.twitter.com' },
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
        <Image src={icon} alt={name} layout="fixed" width={30} height={30} />
      </a>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <Image src={Logo} alt="Bookmark" priority layout="fixed" width={150} height={25} />
      </div>
      <ul className={styles.footer__nav}>{menuItems}</ul>
      <ul className={styles.footer__social}>{socialItems}</ul>
    </footer>
  );
};
