/** React core **/
import React from 'react';

/** Styles **/
import styles from './Button.module.scss';

type ButtonProps = {
  type?: string;
  className?: string;
  variant?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  className,
  variant,
  onClick,
  disabled,
  children,
}) => {
  const defaultClass = 'btn';
  const typeClass = type === 'semi-rectangle' ? `${styles['semi-rectangle']}` : '';
  const customClasses = className || '';
  const variantClass = variant ? `${styles[variant]}` : '';
  const classes = `${defaultClass} ${variantClass} ${typeClass} ${customClasses}`.trim();

  return (
    <button className={classes} type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
