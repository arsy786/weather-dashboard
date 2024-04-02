import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "25vh",
		pb: 2,
	},
	image: {
		width: 200,
	},
	text: {
		fontSize: "2rem",
		fontWeight: "bold",
		color: "#d95027",
		textAlign: "center",
		py: 2,
	},
};

export const NotFound = () => {
	const weatherDataError = useSelector((state) => state.weather.weatherError);

	if (!weatherDataError) {
		return null;
	}

	return (
		<Grid container sx={styles.container}>
			<Grid item xs={12}>
				<Box component="img" sx={styles.image} src="../images/not-found.png" />
			</Grid>
			<Typography sx={styles.text}>Invalid location!</Typography>
		</Grid>
	);
};
