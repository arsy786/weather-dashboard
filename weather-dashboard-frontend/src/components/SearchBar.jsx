import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { Container, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherData } from "../redux/reducers/weatherSlice";

const centerStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "25vh",
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

	const handleOnClick = (city) => {
		handleSearch(city);
	};

	const handleKeyPress = async (e) => {
		if (e.key === "Enter") {
			handleSearch(city);
		}
	};

	return (
		<Container style={centerStyle}>
			<TextField
				id="search"
				type="search"
				label="Enter City"
				value={city}
				onChange={handleChange}
				onKeyPress={handleKeyPress}
				sx={{ width: 600 }}
				InputProps={{
					startAdornment: <LocationOnIcon />,
					endAdornment: (
						<IconButton onClick={handleOnClick}>
							<SearchIcon />
						</IconButton>
					),
				}}
			/>
		</Container>
	);
};

export default SearchBar;
