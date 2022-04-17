import React from 'react';
import { NavBar } from './NavBar';
import { ThemeSwitch } from './ThemeSwitch';
import { WelcomeSection } from './WelcomeSection';
import { AboutSection } from './AboutSection';
import { ProjectSection } from './ProjectSection';
import { ContactSection } from './ContactSection';

import './css/Normalize.css';
import './css/App.css';

export const App = () => {
	return (
		<>
			<NavBar />
			<ThemeSwitch />
			<WelcomeSection />
			<AboutSection />
			<ProjectSection />
			<ContactSection />
		</>
	);
};
