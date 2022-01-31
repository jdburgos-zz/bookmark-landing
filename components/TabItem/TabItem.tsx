/** React core **/
import React from 'react';

/** Next core **/
import Image from 'next/image';

/** Components **/
import { Button } from '@components/ui';

/** Interfaces **/
import { ITab } from '../../interfaces/tab.interface';

/** Styles **/
import styles from './TabItem.module.scss';

type TabItemProps = {
  tab: ITab;
};

export const TabItem: React.FC<TabItemProps> = ({ tab }) => {
  const tabClasses = `${styles['tab-item']}`;

  return (
    <div className={tabClasses}>
      <Image src={tab.img} alt={tab.title} priority />
      <h3 className={styles['tab-item__title']}>{tab.subtitle}</h3>
      <p className={styles['tab-item__description']}>{tab.description}</p>
      <Button>More Info</Button>
    </div>
  );
};
