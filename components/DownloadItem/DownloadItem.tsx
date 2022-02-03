/** React core **/
import React from 'react';

/** Next core **/
import Link from 'next/link';

/** Components **/
import { Button, Card } from '@components/ui';

/** Interfaces **/
import { IDownloadItem } from '@interfaces/download-item.interface';

/** Styles **/
import styles from './DownloadItem.module.scss';

/** Assets **/
import { BgDots } from '@images/BgDots';

type DownloadItemProps = {
  item: IDownloadItem;
};

export const DownloadItem: React.FC<DownloadItemProps> = ({ item }) => (
  <Card className={styles['download-item']}>
    <div className={styles['download-item__container']}>
      {item.logo}
      <div className={styles['download-item__content']}>
        <h3 className={styles['download-item__title']}>{item.title}</h3>
        <span className={styles['download-item__description']}>{item.description}</span>
        <BgDots />
      </div>
      <Link href={item.url}>
        <a target="_blank">
          <Button>{item.btnText}</Button>
        </a>
      </Link>
    </div>
  </Card>
);
