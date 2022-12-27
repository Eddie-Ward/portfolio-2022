import React from "react";
import { SVGTypescript } from "../assets/svgs";

const ICONS_PREFERRED = [
	"typescriptLogo.svg",
	"reactLogo.svg",
	"tailwindLogo.svg",
	"nextJSLogo.svg",
	"postgresLogo.svg",
] as const;

const SkillsStack = () => {
	return (
		<aside className="max-w-md mt-20 flex flex-col gap-4 p-8 rounded-2xl border-4 border-solid border-teal-200">
			<h4>Preferred</h4>
			<div className="flex gap-4">
				{ICONS_PREFERRED.map((path) => (
					<div className="w-16 h-16 bg-teal-200 relative rounded-lg" key={path}>
						<img
							src={`/assets/${path}`}
							className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
						/>
					</div>
				))}
			</div>
			<h4>Know</h4>
			<h4>Other</h4>
		</aside>
	);
};

export default SkillsStack;
