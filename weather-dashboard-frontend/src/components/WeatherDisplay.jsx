import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// Define styles in a separate object
const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "25vh",
	},
	image: {
		width: 250,
	},
	temperature: {
		fontSize: "2rem",
	},
};

const WeatherDisplay = () => {
	const weatherData = useSelector((state) => state.weather.data);
	const weatherDataError = useSelector((state) => state.weather.error);
	const isLoading = useSelector((state) => state.weather.isLoading);

	if (!weatherData || !weatherData.main || weatherDataError || isLoading) {
		return null;
	}

	const temperature = Math.round(weatherData.main.temp);
	const weatherType = weatherData.weather[0].main;
	const weatherDesc = weatherData.weather[0].description;
	const humidity = weatherData.main.humidity;
	const wind = Math.round(weatherData.wind.speed * 3.6);

	// Create a mapping of weather types to image URLs
	const weatherImages = {
		Clear: "../images/clear.png",
		Rain: "../images/rain.png",
		Snow: "../images/snow.jpg",
		Clouds: "../images/cloudy.png",
		Thunderstorm: "../images/thunderstorm.png",
		Drizzle: "../images/drizzle.png",
		Atmosphere: "../images/mist.png",
		Mist: "../images/mist.png",
	};

	// Determine the image URL based on weatherType
	const imageUrl = weatherImages[weatherType] || "no-results.jpg";

	return (
		<Container sx={styles.container}>
			<Box>
				<Box
					component="img"
					sx={styles.image}
					src={imageUrl}
					alt={`Weather: ${weatherType}`}
				/>
			</Box>
			<Box>
				<Typography sx={styles.temperature} variant="h2">
					{temperature}°C
				</Typography>
			</Box>
			<Box>{weatherDesc}</Box>
			<Box>Humidity: {humidity}%</Box>
			<Box>Wind: {wind}kmh</Box>
		</Container>
	);
};

export default WeatherDisplay;
