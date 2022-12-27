import React from "react";
import SkillsRow from "./SkillsRow";

const ICONS_PREFERRED = [
	"typescriptLogo.svg",
	"reactLogo.svg",
	"tailwindLogo.svg",
	"nextJSLogo.svg",
	"postgresLogo.svg",
];

const ICONS_KNOW_01 = [
	"javascriptLogo.svg",
	"reduxLogo.svg",
	"materialUILogo.svg",
	"styledcomponentsLogo.svg",
	"threeJSLogo.svg",
];

const SkillsStack = () => {
	return (
		<aside className="max-w-md mt-20 flex flex-col gap-4 p-8 rounded-2xl border-4 border-solid border-teal-200">
			<h4>Preferred</h4>
			<SkillsRow svgArr={ICONS_PREFERRED} />
			<h4>Know</h4>
			<SkillsRow svgArr={ICONS_KNOW_01} />
			<h4>Other</h4>
		</aside>
	);
};

export default SkillsStack;
