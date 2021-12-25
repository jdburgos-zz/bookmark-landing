/** React core **/
import React from 'react';

/** Styles **/
import styles from './Input.module.scss';

export const Input = ({ className, onChange, input }) => {
  const customClasses = className ? className : '';
  const classes = `${styles.input} ${customClasses}`.trim();

  return <input onChange={onChange} className={classes} {...input} />;
};
