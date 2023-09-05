import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "25vh",
	},
	image: {
		width: 400,
	},
	text: {
		fontSize: "2rem",
		textAlign: "center",
	},
};

export const NotFound = () => {
	const weatherDataError = useSelector((state) => state.weather.error);

	if (!weatherDataError) {
		return null;
	}

	return (
		<Grid container sx={styles.container}>
			<Grid item xs={8}>
				<Box
					component="img"
					sx={styles.image}
					src="../images/not-found.png"
				></Box>
				<Typography sx={styles.text}>Oops! Invalid location.</Typography>
			</Grid>
		</Grid>
	);
};
