/** React core **/
import React from 'react';

/** Next core **/
import Image from 'next/image';
import Link from 'next/link';

/** Styles **/
import styles from './Logo.module.scss';

/** Assets **/
import LogoImg from '../../public/images/logo-bookmark.svg';

type LogoProps = {
  href?: string;
};

export const Logo: React.FC<LogoProps> = ({ href = '/' }) => {
  return (
    <Link href={href}>
      <a className={styles.logo}>
        <Image src={LogoImg} alt="Bookmark" priority />
      </a>
    </Link>
  );
};
