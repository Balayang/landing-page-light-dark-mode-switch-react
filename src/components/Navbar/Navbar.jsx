import React from 'react';

import styles from './Navbar.module.css';

export const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navbarItems}>
      <li>
        <a href="#home" className={styles.aTag}>
          Home
        </a>
      </li>
      <li className={styles.navbarItem}>
        <a href="#about" className={styles.aTag}>
          About
        </a>
      </li>
      <li className={styles.navbarItem}>
        <a href="#projects" className={styles.aTag}>
          Projects
        </a>
      </li>
      <li className={styles.navbarItem}>
        <a href="#contact" className={styles.aTag}>
          Contacts
        </a>
      </li>
    </ul>
  </nav>
);
