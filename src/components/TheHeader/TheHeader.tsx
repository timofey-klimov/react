import React, { FC } from 'react';
import styles from './TheHeader.module.scss';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

interface TheHeaderProps {}

export const TheHeader: FC<TheHeaderProps> = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      devFinder
    </div>
    <ThemeSwitcher/>
  </div>
);
