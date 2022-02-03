/** React core **/
import { useState } from 'react';

/** Next core **/
import Link from 'next/link';
import Image from 'next/image';

/** Components **/
import { Logo } from '@components/Logo';

/** Styles **/
import styles from './MainMenu.module.scss';

/** Assets **/
import HamburgerIcon from '@public/images/icon-hamburger.svg';
import CloseIcon from '@public/images/icon-close.svg';
import TwitterIcon from '@public/images/icon-twitter.svg';
import FacebookIcon from '@public/images/icon-facebook.svg';

export const MainMenu = () => {
  const [isMenuActive, toggleMenu] = useState(false);
  const [isLogged] = useState(false);

  const handleMenu = () => {
    toggleMenu(prevState => !prevState);
  };

  const HandleLogout = () => {
    handleMenu();
  };

  const logout = (
    <div className={styles['main-menu__item']} onClick={HandleLogout}>
      logout
    </div>
  );

  const loginClasses = `${styles['main-menu__link']} ${styles['main-menu__link-login']}`;

  const content = isLogged ? (
    logout
  ) : (
    <li className={styles['main-menu__item']}>
      <Link href="/auth/login">
        <a className={loginClasses} onClick={handleMenu}>
          LOGIN
        </a>
      </Link>
    </li>
  );
  const admin = (
    <li className={styles['main-menu__item']}>
      <Link href="/admin">
        <a className={styles['main-menu__link']} onClick={handleMenu}>
          Dashboard
        </a>
      </Link>
    </li>
  );

  const MENU_ITEMS = [
    { url: '/features', name: 'FEATURES' },
    { url: '/pricing', name: 'PRICING' },
    { url: '/contact', name: 'CONTACT' },
  ];

  const menuItems = MENU_ITEMS.map(({ url, name }, index) => (
    <li key={index} className={styles['main-menu__item']}>
      <Link href={url}>
        <a className={styles['main-menu__link']} onClick={handleMenu}>
          {name}
        </a>
      </Link>
    </li>
  ));

  const socialMenuClasses =
    `${styles['main-menu__submenu']} ${styles['main-menu__social-links']}`.trim();

  const menu = (
    <div className={styles['main-menu__container']}>
      <ul className={styles['main-menu__submenu']}>
        {menuItems}
        {isLogged && admin}
        {content}
      </ul>
      <ul className={socialMenuClasses}>
        <li className={styles['main-menu__social-item']}>
          <a
            className={styles['main-menu__social-link']}
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={FacebookIcon} alt="Facebook" />
          </a>
        </li>
        <li className={styles['main-menu__social-item']}>
          <a
            className={styles['main-menu__social-link']}
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={TwitterIcon} alt="Twitter" />
          </a>
        </li>
      </ul>
    </div>
  );

  const menuIcon = isMenuActive ? CloseIcon : HamburgerIcon;
  const mainClass = styles['main-menu'];
  const classes = isMenuActive ? `${mainClass} ${styles['main-menu--open']}` : mainClass;
  const headerClass = isMenuActive ? styles['main-menu__header'] : '';

  return (
    <div className={classes}>
      <div className={headerClass}>
        {isMenuActive && <Logo />}
        <div className={styles['main-menu__btn']} onClick={handleMenu}>
          <Image src={menuIcon} alt="Menu" priority />
        </div>
      </div>
      {isMenuActive && menu}
    </div>
  );
};
