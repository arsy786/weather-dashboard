import SearchIcon from "@mui/icons-material/Search";
import { Container, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const centerStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "25vh",
};

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const getWeatherData = async (location) => {
		try {
			const res = await axios.get(`http://localhost:3001/weather/${location}`);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleKeyPress = async (e) => {
		if (e.key === "Enter") {
			getWeatherData(searchTerm);
		}
	};

	return (
		<Container style={centerStyle}>
			<TextField
				id="search"
				type="search"
				label="Search"
				value={searchTerm}
				onChange={handleChange}
				onKeyPress={handleKeyPress}
				sx={{ width: 600 }}
				InputProps={{
					endAdornment: <SearchIcon />,
				}}
			/>
		</Container>
	);
};

export default SearchBar;
