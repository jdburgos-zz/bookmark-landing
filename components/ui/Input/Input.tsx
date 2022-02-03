/** React core **/
import React from 'react';

/** Styles **/
import styles from './Input.module.scss';

/** Assets **/
import { ErrorIcon } from '@images/errorIcon';

type InputProps = {
  className?: string;
  input: {
    ref: React.RefObject<HTMLInputElement>;
    placeholder: string;
    type: string;
  };
  error: boolean;
  onChange: () => void;
};

export const Input: React.FC<InputProps> = ({ className, error, onChange, input }) => {
  const customClasses = className || '';
  const errorClass = error ? styles['input--error'] : '';
  const classes = `${styles.input} ${customClasses} ${errorClass}`.trim();
  const errorIcon = <ErrorIcon className={styles.input__icon} />;

  return (
    <>
      <input onChange={onChange} className={classes} {...input} />
      {error && errorIcon}
    </>
  );
};
