# Weather Dashboard

## Introduction

This is a basic weather app built using NodeJS and React. When a user enters a valid location into the search box, the current weather for that region is displayed. This is a project used to test my fullstack abilities using modern technologies and methodologies.

## Installation

To install this application, you will need to have Node.js installed on your system.

Once you have these installed, follow these steps:

1. Clone the repository: `git clone https://github.com/arsy786/weather-dashboard.git`
2. Install the dependencies:

- `cd weather-dashboard/weather-dashboard-backend && npm install`
- `cd weather-dashboard/weather-dashboard-frontend && npm install`

3. Set up the environment variables: create a .env file in the weather-dashboard-backend directory with the following variables:

```makefile
WEATHER_API_KEY=<YOUR_API_KEY>
```

Note: [OpenWeatherMap API](https://openweathermap.org/api)

4. Start the backend and frontend development servers:

- Backend: `cd weather-dashboard/weather-dashboard-backend && npm run dev`
- Frontend: `cd weather-dashboard/weather-dashboard-frontend && npm run dev`
