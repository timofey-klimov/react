import React, { FC } from 'react';
import styles from './UserCard.module.scss';

interface UserCardProps {}

export const UserCard: FC<UserCardProps> = () => (
  <div className={styles.UserCard}>
    UserCard Component
  </div>
);
