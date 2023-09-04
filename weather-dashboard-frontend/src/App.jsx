import { NotFound } from "./components/NotFound";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
	return (
		<>
			<h1>Weather Dashboard App</h1>
			<SearchBar />
			<WeatherDisplay />
			<NotFound />
		</>
	);
}

export default App;
