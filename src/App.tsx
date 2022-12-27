import ScrollBar from "./components/ScrollBar";
import Intro from "./pages/Intro";
import Skills from "./pages/Skills";

const SCROLL_BAR_HEIGHTS = ["screen", "screen", "screen", "screen"] as const;
const SCROLL_BAR_COLORS = ["bg-purple-500", "bg-sky-300", "bg-yellow-300", "bg-orange-500"] as const;

function App() {
	return (
		<>
			<Intro />
			<Skills />
			<div className="absolute w-2 top-0 left-0 z-10 bg-black">
				{SCROLL_BAR_COLORS.map((_, i) => (
					<ScrollBar height={SCROLL_BAR_HEIGHTS[i]} color={SCROLL_BAR_COLORS[i]} key={i} />
				))}
			</div>
		</>
	);
}

export default App;
