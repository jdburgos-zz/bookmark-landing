/** React core **/
import { useState } from 'react';

/** Next core **/
import Link from 'next/link';
import { useRouter } from 'next/router';

/** Hooks **/
import { useAppDispatch, useAppSelector } from '@hooks/react-redux';

/** Reducers **/
import { logoutFn } from '@store/auth/auth.reducer';

/** Styles **/
import styles from './MainMenu.module.scss';

/** Assets **/
import { LogoBookmark } from '@images/LogoBookmark';
import { HamburgerIcon } from '@images/HamburgerIcon';
import { CloseIcon } from '@images/CloseIcon';
import { TwitterIcon } from '@images/TwitterIcon';
import { FacebookIcon } from '@images/FacebookIcon';

export const MainMenu = () => {
  const [isMenuActive, toggleMenu] = useState(false);
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleMenu = () => {
    toggleMenu(prevState => !prevState);
  };

  const HandleLogout = async () => {
    handleMenu();
    dispatch(logoutFn(null));
    localStorage.removeItem('user');
    await router.push('/');
  };

  const btnLinkClasses = `${styles['main-menu__link']} ${styles['main-menu__link-btn']}`;

  const logout = (
    <li className={styles['main-menu__item']} onClick={HandleLogout}>
      <div className={btnLinkClasses}>LOGOUT</div>
    </li>
  );

  const content = user?.isLoggedIn ? (
    logout
  ) : (
    <li className={styles['main-menu__item']}>
      <Link href="/auth/login">
        <a className={btnLinkClasses} onClick={handleMenu}>
          LOGIN
        </a>
      </Link>
    </li>
  );
  const admin = (
    <li className={styles['main-menu__item']}>
      <Link href="/admin">
        <a className={styles['main-menu__link']} onClick={handleMenu}>
          DASHBOARD
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
        {user?.isLoggedIn && admin}
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
            <FacebookIcon />
          </a>
        </li>
        <li className={styles['main-menu__social-item']}>
          <a
            className={styles['main-menu__social-link']}
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </div>
  );

  const menuIcon = isMenuActive ? <CloseIcon /> : <HamburgerIcon />;
  const mainClass = styles['main-menu'];
  const classes = isMenuActive ? `${mainClass} ${styles['main-menu--open']}` : mainClass;
  const headerClass = isMenuActive ? styles['main-menu__header'] : '';
  const logo = (
    <Link href="/">
      <a className={styles.logo} onClick={handleMenu}>
        <LogoBookmark fill="#FFF" />
      </a>
    </Link>
  );
  return (
    <div className={classes}>
      <div className={headerClass}>
        {isMenuActive && logo}
        <div className={styles['main-menu__btn']} onClick={handleMenu}>
          {menuIcon}
        </div>
      </div>
      {isMenuActive && menu}
    </div>
  );
};
