import { NotFound } from "./components/NotFound";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
	return (
		<>
			<SearchBar />
			<WeatherDisplay />
			<NotFound />
		</>
	);
}

export default App;
