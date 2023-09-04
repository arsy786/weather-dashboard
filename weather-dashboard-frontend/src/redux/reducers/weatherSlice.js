import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeatherData = createAsyncThunk(
	"weather/getWeatherData",
	async (city) => {
		const res = await axios.get(`http://localhost:3001/weather/${city}`);
		// console.log(res);
		const data = res.data;
		console.log(data);
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
	reducers: {
		// setWeatherData: (state, action) => {
		// 	state.value = action.payload;
		// },
	},
	extraReducers: {
		[getWeatherData.pending]: (state) => {
			state.isLoading = true;
			state.error = false;
		},
		[getWeatherData.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.error = false;
			state.data = action.payload;
		},
		[getWeatherData.rejected]: (state) => {
			state.isLoading = false;
			state.error = true;
		},
	},
});

export const { setWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
