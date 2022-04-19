import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

import styles from './About.module.css';

export const About = () => {
  const { theme } = useTheme();

  return (
    <section>
      <h2>Undraw Illustration</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          <h3>Proud Coder</h3>
          {/* assets from public folder can be in CRA accessed directly */}
          <img src={`images/undraw_proud_coder_${theme}.svg`} alt="Proud Coder" />
        </div>
        <div className={styles.imageContainer}>
          <h3>Feeling Proud</h3>
          <img src={`images/undraw_feeling_proud_${theme}.svg`} alt="Feeling proud" />
        </div>
        <div className={styles.imageContainer}>
          <h3>Conceptual Idea</h3>
          <img src={`images/undraw_conceptual_idea_${theme}.svg`} alt="Conceptual idea" />
        </div>
      </div>
    </section>
  );
};
