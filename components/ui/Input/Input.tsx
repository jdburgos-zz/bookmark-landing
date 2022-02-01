/** React core **/
import React from 'react';

/** Next core **/
import Image from 'next/image';

/** Styles **/
import styles from './Input.module.scss';

/** Assets **/
import ErrorIcon from '../../../public/images/icon-error.svg';

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
  const errorIcon = <Image src={ErrorIcon} className={styles.input__icon} layout="fixed" />;

  return (
    <>
      <input onChange={onChange} className={classes} {...input} />
      {error && errorIcon}
    </>
  );
};
