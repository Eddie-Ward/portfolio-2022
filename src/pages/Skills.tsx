import React from "react";
import PageHeader from "../components/PageHeader";
import SkillsStack from "../components/SkillsStack";

const Skills = () => {
	return (
		<article className="mx-28 h-screen">
			<PageHeader title={"01 SKILLS"} />
			<div className="flex gap-32">
				<article className="flex flex-col gap-10">
					<section className="flex flex-col gap-4 items-start">
						<h2>My Stack</h2>
						<h3>My journey started with...</h3>
					</section>
					<p className="max-w-[40ch]">
						My first language was Java, but I started really coding with Python for use in writing
						parametric modeling scripts while working at an architecture firm. During this time, I was
						always on the peripheries of programming before I fully decided to commit by attending General
						Assembly’s bootcamp. Now, my favorite language is Typescript.
					</p>
				</article>
				<SkillsStack />
			</div>
		</article>
	);
};

export default Skills;
