import { useSelector } from "react-redux";

export const NotFound = () => {
	const weatherDataError = useSelector((state) => state.weather.error);
	console.log(weatherDataError);

	if (!weatherDataError) {
		return null;
	}

	return (
		<>
			<img src="../images/not-found.png" width="400" />
			<p>Oops! Invalid location :/</p>
		</>
	);
};
