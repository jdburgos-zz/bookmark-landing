/** React core **/
import React from 'react';

/** Styles **/
import styles from './Tab.module.scss';

type TabProps = {
  text: string;
};

export const Tab: React.FC<TabProps> = ({ text }) => {
  const handleTabClick = () => {
    console.log(231);
  };

  const classes = `${styles.tab}`.trim();

  return (
    <span className={classes} onClick={handleTabClick}>
      {text}
    </span>
  );
};
