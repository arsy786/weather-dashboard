import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Grid, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getWeatherData } from "../redux/reducers/weatherSlice";

const styles = {
	searchBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		py: 4,
	},
	textField: {
		width: { xs: 250, sm: 300, md: 300 },
	},
};

const SearchBar = () => {
	const [city, setCity] = useState("");
	const dispatch = useDispatch();
	const options = useSelector((state) => state.weather.citiesData);

	useEffect(() => {
		if (city.length > 2) {
			dispatch(getCities(city));
		}
	}, [city, dispatch]);

	const handleSearch = async (city) => {
		dispatch(getWeatherData(city));
	};

	const handleInputChange = (event, newInputValue) => {
		setCity(newInputValue);
	};

	const handleOnClick = () => {
		handleSearch(city);
	};

	const handleOptionSelect = (event, newValue) => {
		if (newValue) {
			handleSearch(newValue);
		}
	};

	return (
		<Grid container sx={styles.searchBox}>
			<Grid item xs={12} lg={12}>
				<Autocomplete
					freeSolo
					id="city-search"
					disableClearable
					options={options}
					inputValue={city}
					onInputChange={handleInputChange}
					onChange={handleOptionSelect}
					renderInput={(params) => (
						<TextField
							{...params}
							label="Enter City"
							sx={styles.textField}
							InputProps={{
								...params.InputProps,
								startAdornment: <LocationOnIcon sx={{ marginRight: "6px" }} />,
								endAdornment: (
									<IconButton onClick={handleOnClick}>
										<SearchIcon />
									</IconButton>
								),
							}}
						/>
					)}
				/>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
