/** React core **/
import React from 'react';

/** Styles **/
import styles from './Input.module.scss';

type InputProps = {
  className: string;
  input: any;
  onChange: () => void;
};

export const Input: React.FC<InputProps> = ({ className, onChange, input }) => {
  const customClasses = className || '';
  const classes = `${styles.input} ${customClasses}`.trim();

  return <input onChange={onChange} className={classes} {...input} />;
};
