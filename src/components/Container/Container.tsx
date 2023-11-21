import React, { FC, ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => (
  <div className={styles.Container}>
    {children}
  </div>
);
