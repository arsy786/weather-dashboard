import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeatherData = createAsyncThunk(
	"weather/getWeatherData",
	async (city) => {
		const res = await axios.get(`http://localhost:3001/weather/${city}`);
		const data = res.data;
		return data;
	}
);

export const getCities = createAsyncThunk("weather/getCities", async (city) => {
	const response = await axios.get(`http://localhost:3001/cities?name=${city}`);
	return response.data;
});

const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		weatherData: [],
		weatherIsLoading: false,
		weatherError: false,
		citiesData: [],
		citiesIsLoading: false,
		citiesError: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getWeatherData.pending, (state) => {
				state.weatherIsLoading = true;
				state.weatherError = false;
			})
			.addCase(getWeatherData.fulfilled, (state, action) => {
				state.weatherIsLoading = false;
				state.weatherError = false;
				state.weatherData = action.payload;
			})
			.addCase(getWeatherData.rejected, (state) => {
				state.weatherIsLoading = false;
				state.weatherError = true;
			})
			.addCase(getCities.pending, (state) => {
				state.citiesIsLoading = true;
				state.citiesError = false;
			})
			.addCase(getCities.fulfilled, (state, action) => {
				state.citiesIsLoading = false;
				state.citiesError = false;
				state.citiesData = action.payload;
			})
			.addCase(getCities.rejected, (state) => {
				state.citiesIsLoading = false;
				state.citiesError = true;
			});
	},
});

export default weatherSlice.reducer;
