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

const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		data: [],
		isLoading: false,
		error: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getWeatherData.pending, (state) => {
				state.isLoading = true;
				state.error = false;
			})
			.addCase(getWeatherData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = false;
				state.data = action.payload;
			})
			.addCase(getWeatherData.rejected, (state) => {
				state.isLoading = false;
				state.error = true;
			});
	},
});

export const { setWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
