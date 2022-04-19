import React from 'react';
import AboutCSS from '../styles/About.module.css';
//import images from '../..public/images'
//import ProudCoder from '../../public/images/undraw_proud_coder_light.svg';

export const About = () => {
	return (
		<section id="about">
			<h2>Undraw Illustration</h2>
			<div className={AboutCSS.aboutContainer}>
				<div className={AboutCSS.imageContainer}>
					<h3>Web Innovation</h3>
					<img id="image1" src="undraw_proud_coder_light.svg" alt="Proud Coder" />
				</div>
				<div className={AboutCSS.imageContainer}>
					<h3>Web Innovation</h3>
					<img
						id="image2"
						src="img/undraw_feeling_proud_light.svg"
						alt="Proud Coder"
					/>
				</div>
				<div className={AboutCSS.imageContainer}>
					<h3>Web Innovation</h3>
					<img
						id="image3"
						src="img/undraw_conceptual_idea_light.svg"
						alt="Proud Coder"
					/>
				</div>
			</div>
		</section>
	);
};
