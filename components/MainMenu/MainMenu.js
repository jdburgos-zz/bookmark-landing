/** React core **/
import { useState } from 'react';

/** Next core **/
import Link from "next/link";

/** Styles **/
import styles from './MainMenu.module.scss';

export const MainMenu = () => {
  const [isMenuActive, toggleMenu] = useState(true);

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

  const content = false ? logout : (
    <li>
      <Link href="/auth/login" className={styles['main-menu__item']} onClick={handleMenu}>Login</Link>
    </li>
  );
  const admin = (
    <li>
      <Link href="/dashboard" className={styles['main-menu__item']} onClick={handleMenu}>
        Dashboard
      </Link>
    </li>
  );

  const MENU_ITEMS = [
    { url: '/features', name: 'Features' },
    { url: '/pricing', name: 'Pricing' },
    { url: '/contact', name: 'Contact' },
  ]

  const menuItems = MENU_ITEMS.map(({ url, name }, index) => (
      <li key={index}>
        <Link href={url} className={styles['main-menu__item']} onClick={handleMenu}>{ name }</Link>
      </li>
    )
  );

  const menu = (
    <div className={styles['main-menu__container']}>
      <ul>
        {menuItems}
        {false && admin}
        {content}
      </ul>
    </div>
  );

  return (
    <div className={styles['main-menu']}>
      <div className={styles['main-menu__btn']} onClick={handleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      {isMenuActive && menu}
    </div>
  );
};
