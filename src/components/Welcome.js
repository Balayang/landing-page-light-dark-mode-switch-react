import React from 'react';
import WelcomeCSS from '../styles/Welcome.module.css';

export const Welcome = () => {
	return (
		<section id="home" className={WelcomeCSS.welcome}>
			<div className={WelcomeCSS.titleGroup}>
				<h1>Custom Title Here</h1>
				<h3>Welcome to the Website!</h3>
			</div>
		</section>
	);
};
