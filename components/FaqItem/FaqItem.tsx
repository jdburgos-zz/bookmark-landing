/** React core **/
import React, { useState } from 'react';

/** Next core **/
import Image from 'next/image';

/** Interfaces **/
import { IFaqItem } from '../../interfaces/faq-item.interface';

/** Assets **/
import Arrow from '../../public/images/icon-arrow.svg';

/** Styles **/
import styles from './FaqItem.module.scss';

type FaqItemProps = {
  item: IFaqItem;
};

export const FaqItem: React.FC<FaqItemProps> = ({ item }) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(prevState => !prevState);
  };

  const content = <p className={styles['faq-item__content']}>{item.description}</p>;

  return (
    <div className={styles['faq-item']}>
      <div className={styles['faq-item__header']} onClick={handleClick}>
        <h3 className={styles['faq-item__title']}>{item.title}</h3>
        <Image src={Arrow} alt="arrow" />
      </div>
      {isActive && content}
    </div>
  );
};
