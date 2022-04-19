import React from 'react';
import classNames from 'classnames/bind';

import { useTheme } from '../../hooks/useThemeContext';

import styles from './ThemeSwitch.module.css';

const cx = classNames.bind(styles);

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.themeSwitchWrapper}>
      <span id="toggle-icon" className={styles.toggleIcon}>
        <span className={styles.toggleText}>{theme}</span>
        <svg
          className={styles.iconTheme}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="2rem"
          width="2rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"></path>
          <path
            fillRule="evenodd"
            d="M8.202.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L5.232.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.19l-1.532-.245a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.509.36a.25.25 0 00-.154.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334L.79 10.768a.25.25 0 00.154.374l1.51.36a.25.25 0 01.188.282l-.244 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.508a.25.25 0 00-.374-.155l-1.322.812a.25.25 0 01-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <label className={styles.themeSwitch}>
        <input
          onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
          id="checkbox"
          type="checkbox"
          checked={theme === 'dark'}
        />
        <div className={cx('slider', 'round')} />
      </label>
    </div>
  );
};
