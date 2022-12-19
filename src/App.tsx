import { useState } from "react";
import Intro from "./pages/Intro";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Intro />
		</>
	);
}

export default App;
