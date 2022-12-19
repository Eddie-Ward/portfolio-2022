import React from "react";

const Intro = () => {
	return (
		<>
			<h1 className="font-sans font-bold text-9xl mx-28 mt-20 text-right text-teal-50 opacity-25">00 INTRO</h1>
			<main className="flex flex-col gap-10 mx-28">
				<section className="flex flex-col gap-4 items-start">
					<h3>Hello, I'm</h3>
					<h2>Edward Liew.</h2>
					<h3>
						I design <s>and</s> code
					</h3>
				</section>
				<p className="max-w-[40ch]">
					I’m a software engineer coming from an architecture background. I use technology as a medium of
					design. I value well-designed user experiences and well-designed code without compromising one over
					the other.
				</p>
				<button className="max-w-[10rem] h-12 rounded-lg border-solid border-teal-200 border-4 text-teal-200 text-xl">
					Resume
				</button>
			</main>
		</>
	);
};

export default Intro;
