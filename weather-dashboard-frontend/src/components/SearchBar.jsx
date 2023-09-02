import SearchIcon from "@mui/icons-material/Search";
import { Container, TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<Container maxWidth="md" sx={{ mt: 20 }}>
			<TextField
				id="search"
				type="search"
				label="Search"
				value={searchTerm}
				onChange={handleChange}
				sx={{ width: 600 }}
				InputProps={{
					endAdornment: <SearchIcon />,
				}}
			/>
		</Container>
	);
};

export default SearchBar;
