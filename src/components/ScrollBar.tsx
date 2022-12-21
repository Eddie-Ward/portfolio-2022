import React from "react";

interface ScrollBarProps {
	height: number | "screen";
	color: string;
}

const ScrollBar = ({ height, color }: ScrollBarProps) => {
	return <div className={"w-full " + `${typeof height === "number" ? `h-[${height}px]` : "h-screen"} ${color}`} />;
};

export default ScrollBar;
