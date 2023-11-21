import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string,
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({children, onClick}) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

