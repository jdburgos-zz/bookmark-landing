/** React core **/
import React from 'react';

/** Styles **/
import styles from './Card.module.scss';

export const Card = props => {
  const customClasses = props.className ? props.className : '';
  const classes = `${styles.card} ${customClasses}`.trim();

  return <div className={classes}>{props.children}</div>;
};
