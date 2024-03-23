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
		pb: 2,
	},
	largeImage: {
		width: 250,
	},
	smallImage: {
		width: 50,
		marginRight: "1rem",
	},
	temperature: {
		fontSize: "2rem",
		fontWeight: "bold",
		textAlign: "center",
	},
	description: {
		textAlign: "center",
	},
	loading: {
		display: "flex",
		justifyContent: "center",
		size: "5em",
	},
	infoRow: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		pb: 2,
	},
	infoLabel: {
		fontSize: "1.2rem",
		fontWeight: "bold",
	},
	infoValue: {
		fontSize: "1.2rem",
	},
};

const WeatherDisplay = () => {
	const weatherData = useSelector((state) => state.weather.data);
	const weatherDataError = useSelector((state) => state.weather.error);
	const isLoading = useSelector((state) => state.weather.isLoading);

	if (!weatherData || !weatherData.main || weatherDataError) {
		return null;
	}

	if (isLoading) {
		return (
			<Container sx={styles.container}>
				<CircularProgress sx={styles.loading} />
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
				<Grid item xs={8} sx={styles.container}>
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

			<Grid container sx={styles.infoRow}>
				<Grid item xs={8} md={4} sx={styles.infoRow}>
					<Box
						component="img"
						sx={styles.smallImage}
						src="../images/humidity.png"
					/>
					<Box>
						<Typography sx={styles.infoValue}>{humidity}%</Typography>
						<Typography sx={styles.infoLabel}>Humidity</Typography>
					</Box>
				</Grid>
				<Grid item xs={8} md={4} sx={styles.infoRow}>
					<Box
						component="img"
						sx={styles.smallImage}
						src="../images/wind.png"
					/>
					<Box>
						<Typography sx={styles.infoValue}>{wind} km/h</Typography>
						<Typography sx={styles.infoLabel}>Wind Speed</Typography>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default WeatherDisplay;
