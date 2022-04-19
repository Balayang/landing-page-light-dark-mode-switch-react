import React from 'react';

import styles from './Welcome.module.css';

export const Welcome = () => (
  <section className={styles.welcome}>
    <div className={styles.titleGroup}>
      <h1>Custom Title Here</h1>
      <h3>Welcome to the Website!</h3>
    </div>
  </section>
);
