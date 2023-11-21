import React, { FC } from 'react';
import styles from './UserStat.module.scss';

interface UserStatProps {}

export const UserStat: FC<UserStatProps> = () => (
  <div className={styles.UserStat}>
    UserStat Component
  </div>
);
