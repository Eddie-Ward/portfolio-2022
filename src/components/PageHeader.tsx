import React from "react";

interface PageHeaderProps {
	title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
	return (
		<h1
			className="font-sans font-bold text-9xl mt-20 text-right text-teal-50 opacity-25"
			style={{ marginTop: "calc(min(5rem, 10vh))" }}>
			{title}
		</h1>
	);
};

export default PageHeader;
