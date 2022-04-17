import React from 'react';

export const ProjectSection = () => {
	return (
		<section className="section projects" id="projects">
			<h2>Buttons</h2>
			<div className="buttons-container buttons">
				<button className="primary">Primary</button>
				<button className="secondary">Secondary</button>
				<button className="primary" disabled>
					Disabled
				</button>
				<button className="secondary outline">Alt Outline</button>
				<button className="outline" disabled>
					Disabled
				</button>
			</div>
			<div className="text-box" id="text-box">
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
