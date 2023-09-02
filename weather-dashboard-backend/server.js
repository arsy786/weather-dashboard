const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");

const app = express();
dotenv.config();

app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
	res.send("Weather Dashboard API is running.");
});

app.get("/weather/:city", async (req, res) => {
	try {
		const city = req.params.city;
		const apiKey = process.env.WEATHER_API_KEY;

		const apiLocationDataUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

		const responseLocation = await axios.get(apiLocationDataUrl);

		const locationData = {
			lat: responseLocation.data[0].lat,
			lon: responseLocation.data[0].lon,
		};

		const apiWeatherDataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=${apiKey}&units=metric`;

		const responseWeather = await axios.get(apiWeatherDataUrl);
		res.json(responseWeather.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Server listening on post ${port}`);
});
