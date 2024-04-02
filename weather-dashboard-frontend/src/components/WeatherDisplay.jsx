import {
	Box,
	CircularProgress,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		pb: 5,
	},
	largeImage: {
		width: 200,
	},
	smallImage: {
		width: 50,
		marginRight: 1,
	},
	temperature: {
		fontSize: "2rem",
		fontWeight: "bold",
		textAlign: "center",
		pb: 2,
	},
	description: {
		textAlign: "center",
	},
	loading: {
		py: 5,
	},
	infoRow: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		pb: 2,
	},
	humidityLabel: {
		fontSize: "1.1rem",
		fontWeight: "bold",
	},
	humidityValue: {
		fontSize: "1.2rem",
	},
	windLabel: {
		fontSize: "1.1rem",
		fontWeight: "bold",
	},
	windValue: {
		fontSize: "1.2rem",
	},
};

const WeatherDisplay = () => {
	const weatherData = useSelector((state) => state.weather.weatherData);
	const weatherDataError = useSelector((state) => state.weather.weatherError);
	const isLoading = useSelector((state) => state.weather.weatherIsLoading);

	if (!weatherData || !weatherData.main || weatherDataError) {
		return null;
	}

	if (isLoading) {
		return (
			<Container sx={styles.container}>
				<CircularProgress sx={styles.loading} size="4em" thickness="4" />
			</Container>
		);
	}

	const temperature = Math.round(weatherData.main.temp);
	const weatherType = weatherData.weather[0].main;
	const weatherDesc = weatherData.weather[0].description;
	const humidity = weatherData.main.humidity;
	const wind = Math.round(weatherData.wind.speed * 3.6);

	const weatherImages = {
		Clear: "../images/clear.png",
		Rain: "../images/rain.png",
		Snow: "../images/snow.png",
		Clouds: "../images/cloudy.png",
		Thunderstorm: "../images/thunderstorm.png",
		Drizzle: "../images/drizzle.png",
		Atmosphere: "../images/mist.png",
		Mist: "../images/mist.png",
	};

	const imageUrl = weatherImages[weatherType] || "no-results.jpg";

	return (
		<>
			<Grid container sx={styles.container}>
				<Grid item xs={12}>
					<Box>
						<Box
							component="img"
							sx={styles.largeImage}
							src={imageUrl}
							alt={`Weather: ${weatherType}`}
						/>
					</Box>
					<Box>
						<Typography sx={styles.temperature} variant="h2">
							{temperature}°C
						</Typography>
						<Typography sx={styles.description} variant="h5">
							{weatherDesc}
						</Typography>
					</Box>
				</Grid>
			</Grid>

			<Grid container spacing={2} sx={styles.infoRow}>
				<Grid item xs={6} md={6} sx={styles.infoRow}>
					<Box
						component="img"
						sx={styles.smallImage}
						src="../images/humidity.png"
					/>
					<Box>
						<Typography sx={styles.humidityValue}>{humidity}%</Typography>
						<Typography sx={styles.humidityLabel}>Humidity</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} md={6} sx={styles.infoRow}>
					<Box
						component="img"
						sx={styles.smallImage}
						src="../images/wind.png"
					/>
					<Box>
						<Typography sx={styles.windValue}>{wind}km/h</Typography>
						<Typography sx={styles.windLabel}>Wind Speed</Typography>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default WeatherDisplay;
