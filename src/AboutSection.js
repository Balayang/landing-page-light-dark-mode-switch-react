import React from 'react';

//import './assets';

export const AboutSection = () => {
	return (
		<section className="section about" id="about">
			<h2>Undraw Illustration</h2>
			<div className="about-container">
				<div className="image-container">
					<h3>Web Innovation</h3>
					<img
						className="image"
						id="image1"
						src={'../assets/undraw_proud_coder_light.svg'}
						alt="Proud Coder"
					/>
				</div>
				<div className="image-container">
					<h3>Web Innovation</h3>
					<img
						className="image"
						id="image2"
						src="img/undraw_feeling_proud_light.svg"
						alt="Proud Coder"
					/>
				</div>
				<div className="image-container">
					<h3>Web Innovation</h3>
					<img
						className="image"
						id="image3"
						src="img/undraw_conceptual_idea_light.svg"
						alt="Proud Coder"
					/>
				</div>
			</div>
		</section>
	);
};
