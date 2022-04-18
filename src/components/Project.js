import React from 'react';
import ProjectCSS from '../styles/Projects.module.css';

export const Project = () => {
	return (
		<section className="section projects" id="projects">
			<h2>Buttons</h2>
			<div className={ProjectCSS.buttons}>
				<button className={ProjectCSS.primary}>Primary</button>
				<button className={ProjectCSS.secondary}>Secondary</button>
				<button className={ProjectCSS.primary} disabled>
					Disabled
				</button>
				<button className={`${ProjectCSS.secondary} ${ProjectCSS.outline}`}>
					Alt Outline
				</button>
				<button className={ProjectCSS.outline} disabled>
					Disabled
				</button>
			</div>
			<div className={ProjectCSS.textBox} id="text-box">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et
					omnis illum eaque nostrum, accusamus necessitatibus suscipit quod
					magnam iste totam, repellat odio eius! Amet reprehenderit et
					laboriosam rem nam.
				</p>
			</div>
		</section>
	);
};
