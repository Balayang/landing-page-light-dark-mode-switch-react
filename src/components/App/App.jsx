import React from 'react';

import { Navbar } from '../Navbar/Navbar';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { Welcome } from '../Welcome/Welcome';
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { Contact } from '../Contact/Contact';
import { ThemeProvider } from '../../hooks/useThemeContext';

import '../../styles/normalize.css';
import '../../styles/global.css';

export const App = () => (
  <ThemeProvider>
    <Navbar />
    <ThemeSwitch />
    <Welcome />
    <About />
    <Projects />
    <Contact />
  </ThemeProvider>
);
