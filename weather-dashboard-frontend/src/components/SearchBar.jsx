import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherData } from "../redux/reducers/weatherSlice";

const styles = {
	searchBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		p: 5,
	},
	textField: {
		width: { sm: 300, md: 600 },
	},
};

const SearchBar = () => {
	const [city, setCity] = useState("");
	const dispatch = useDispatch();

	const handleSearch = async (city) => {
		dispatch(getWeatherData(city));
	};

	const handleChange = (e) => {
		setCity(e.target.value);
	};

	const handleOnClick = () => {
		handleSearch(city);
	};

	const handleKeyPress = async (e) => {
		if (e.key === "Enter") {
			handleSearch(city);
		}
	};

	return (
		<Grid container sx={styles.searchBox}>
			<Grid item xs={8} lg={8}>
				<TextField
					id="search"
					type="search"
					label=""
					placeholder="Enter City"
					value={city}
					onChange={handleChange}
					onKeyPress={handleKeyPress}
					sx={styles.textField}
					InputProps={{
						startAdornment: <LocationOnIcon />,
						endAdornment: (
							<IconButton onClick={handleOnClick}>
								<SearchIcon />
							</IconButton>
						),
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
