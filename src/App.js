import React from 'react';
import { Navbar } from './components/Navbar';
import { ThemeSwitch } from './components/ThemeSwitch';
import { Welcome } from './components/Welcome';
import { About } from './components/About';
import { Project } from './components/Project';
import { Contact } from './components/Contact';

import './styles/Normalize.css';
import './styles/App.css';

export const App = () => {
	return (
		<>
			<Navbar />
			<ThemeSwitch />
			<Welcome />
			<About />
			<Project />
			<Contact />
		</>
	);
};
