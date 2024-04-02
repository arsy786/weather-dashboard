const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const { Client } = require("@googlemaps/google-maps-services-js");

const app = express();
dotenv.config();
const client = new Client({});

app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
	res.send("Weather Dashboard API is running.");
});

// Route to search for cities
app.get("/cities", async (req, res) => {
	try {
		const { name } = req.query;

		const response = await client.placeAutocomplete({
			params: {
				input: name,
				types: "(cities)",
				key: process.env.PLACES_API_KEY,
			},
			timeout: 1000,
		});

		const cities = response.data.predictions.map(
			(prediction) => prediction.description
		);
		res.json(cities);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// Route to fetch weather data for a specific city
app.get("/weather/:city", async (req, res) => {
	try {
		const city = req.params.city;
		const apiKey = process.env.WEATHER_API_KEY;

		const geocodeParams = {
			address: city,
			key: process.env.PLACES_API_KEY,
		};

		const geocodeResponse = await client.geocode({ params: geocodeParams });

		const location = geocodeResponse.data.results[0].geometry.location;
		const { lat, lng } = location;

		const apiWeatherDataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

		const responseWeather = await axios.get(apiWeatherDataUrl);
		res.json(responseWeather.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
