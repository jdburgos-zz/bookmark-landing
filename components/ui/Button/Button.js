/** React core **/
import React from 'react';

/** Styles **/
import styles from './Button.module.scss';

export const Button = ({ type, className, variant, onClick, disabled, children }) => {
  const defaultClass = 'btn';
  const typeClass = type === 'semi-rectangle' ? `${styles['semi-rectangle']}` : '';
  const customClasses = className ? className : '';
  const variantClass = variant ? `${styles[variant]}` : '';
  const classes = `${defaultClass} ${variantClass} ${typeClass} ${customClasses}`.trim();

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
