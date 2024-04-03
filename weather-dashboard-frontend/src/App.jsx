import { Container } from "@mui/material";
import { useEffect } from "react";
import { NotFound } from "./components/NotFound";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const styles = {
	app: {
		backgroundColor: "#89bccd",
		width: "100%",
		maxWidth: "400px",
		margin: "50px auto",
		padding: "10px",
		borderRadius: "20px",
	},
};

function App() {
	useEffect(() => {
		document.body.style.backgroundColor = "#5280a6";
	}, []);

	return (
		<Container sx={styles.app}>
			<SearchBar />
			<WeatherDisplay />
			<NotFound />
		</Container>
	);
}

export default App;
