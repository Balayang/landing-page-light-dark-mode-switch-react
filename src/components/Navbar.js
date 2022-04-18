import React from 'react';
import NavbarCSS from '../styles/Navbar.module.css';

export const Navbar = () => {
	return (
		<nav className={NavbarCSS.navbar}>
			<ul className={NavbarCSS.navbarItems}>
				<li>
					<a href="#home" className={NavbarCSS.aTag}>
						Home
					</a>
				</li>
				<li className={NavbarCSS.navbarItem}>
					<a href="#about" className={NavbarCSS.aTag}>
						About
					</a>
				</li>
				<li className={NavbarCSS.navbarItem}>
					<a href="#projects" className={NavbarCSS.aTag}>
						Projects
					</a>
				</li>
				<li className={NavbarCSS.navbarItem}>
					<a href="#contact" className={NavbarCSS.aTag}>
						Contacts
					</a>
				</li>
			</ul>
		</nav>
	);
};
