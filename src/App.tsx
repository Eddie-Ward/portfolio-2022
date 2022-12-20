import ScrollBar from "./components/ScrollBar";
import Intro from "./pages/Intro";

function App() {
	return (
		<>
			<Intro />
			<div className="absolute w-2 top-0 left-0 z-10 bg-black">
				<ScrollBar height={"screen"} color={"purple-500"} />
				<ScrollBar height={"screen"} color={"sky-400"} />
				<ScrollBar height={"screen"} color={"yellow-300"} />
				<ScrollBar height={"screen"} color={"orange-500"} />
			</div>
		</>
	);
}

export default App;
