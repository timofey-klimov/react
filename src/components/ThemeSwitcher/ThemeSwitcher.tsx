import React, { FC, useEffect, useState } from 'react';
import { ReactComponent as MoonIcon }  from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? 'Светлая' : 'Темная';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])  
  return ( 
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon}/>
    </div>
  )
}

