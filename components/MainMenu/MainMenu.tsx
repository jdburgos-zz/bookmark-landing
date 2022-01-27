/** React core **/
import { useState } from 'react';

/** Next core **/
import Link from 'next/link';
import Image from 'next/image';

/** Styles **/
import styles from './MainMenu.module.scss';

/** Assets **/
import HamburgerIcon from '../../public/images/icon-hamburger.svg';
import CloseIcon from '../../public/images/icon-close.svg';
import Logo from '../../public/images/logo-bookmark.svg';
import TwitterIcon from '../../public/images/icon-twitter.svg';
import FacebookIcon from '../../public/images/icon-facebook.svg';

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

  const content = isLogged ? (
    logout
  ) : (
    <li>
      <Link href="/auth/login">
        <a onClick={handleMenu}>Login</a>
      </Link>
    </li>
  );
  const admin = (
    <li>
      <Link href="/admin">
        <a onClick={handleMenu}>Dashboard</a>
      </Link>
    </li>
  );

  const MENU_ITEMS = [
    { url: '/features', name: 'Features' },
    { url: '/pricing', name: 'Pricing' },
    { url: '/contact', name: 'Contact' },
  ];

  const menuItems = MENU_ITEMS.map(({ url, name }, index) => (
    <li key={index}>
      <Link href={url}>
        <a onClick={handleMenu}>{name}</a>
      </Link>
    </li>
  ));

  const menu = (
    <div className={styles['main-menu__container']}>
      <ul>
        {menuItems}
        {isLogged && admin}
        {content}
      </ul>
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
    </div>
  );

  const menuIcon = isMenuActive ? CloseIcon : HamburgerIcon;
  const logoImg = <Image src={Logo} alt="Logo" />;

  return (
    <div className={styles['main-menu']}>
      {isMenuActive && logoImg}
      <div className={styles['main-menu__btn']} onClick={handleMenu}>
        <Image src={menuIcon} alt="Menu" priority />
      </div>
      {isMenuActive && menu}
    </div>
  );
};
