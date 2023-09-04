import { useSelector } from "react-redux";

const WeatherDisplay = () => {
	const weatherData = useSelector((state) => state.weather.data);
	const weatherDataError = useSelector((state) => state.weather.error);
	const isLoading = useSelector((state) => state.weather.isLoading);

	if (!weatherData || !weatherData.main || weatherDataError || isLoading) {
		return null;
	}

	const temperature = weatherData.main.temp;

	return (
		<div>
			<h2>WeatherDisplay</h2>
			<p>Temp: {temperature}</p>
		</div>
	);
};

export default WeatherDisplay;
