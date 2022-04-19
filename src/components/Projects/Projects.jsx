import React from 'react';
import classNames from 'classnames/bind';

import styles from './Projects.module.css';

const cx = classNames.bind(styles);

export const Projects = () => (
  <section>
    <h2>Buttons</h2>
    <div className={styles.buttons}>
      <button className={styles.primary}>Primary</button>
      <button className={styles.secondary}>Secondary</button>
      <button className={styles.primary} disabled>
        Disabled
      </button>
      <button className={cx('secondary', 'outline')}>Alt Outline</button>
      <button className={styles.outline} disabled>
        Disabled
      </button>
    </div>
    <div className={styles.textBox}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et omnis illum eaque
        nostrum, accusamus necessitatibus suscipit quod magnam iste totam, repellat odio eius! Amet
        reprehenderit et laboriosam rem nam.
      </p>
    </div>
  </section>
);
