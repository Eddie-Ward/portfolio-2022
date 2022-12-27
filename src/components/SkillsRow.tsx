import React from "react";

interface SkillsRowProps {
	svgArr: string[];
}

const SkillsRow = ({ svgArr }: SkillsRowProps) => {
	return (
		<div className="flex gap-4">
			{svgArr.map((path) => (
				<div className="w-16 h-16 bg-teal-200 relative rounded-lg" key={path}>
					<img
						src={`/assets/${path}`}
						className="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
					/>
				</div>
			))}
		</div>
	);
};

export default SkillsRow;
