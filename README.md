# Weather Dashboard

This is a basic weather app built using NodeJS and React. When a user enters a valid location into the search box, the current weather for that region is displayed. This app utilizes Express and Node.js for server-side functionality, and React for a dynamic front-end user experience.

## Installation

This project is divided into two main parts: the backend (API) and the frontend (UI). Follow these steps to set up and run both parts of the application.

### Prerequisites

- Node.js

### Cloning the Repo

1. Open your terminal or command prompt.

2. Clone the repository using Git:

   ```bash
   git clone https://github.com/arsy786/weather-dashboard.git
   ```

3. Navigate to the cloned repository's root directory

   ```bash
   cd weather-dashboard
   ```

### Setting up the Backend

1. From the root directory, navigate to the backend directory:

   ```bash
   cd weather-dashboard-backend
   ```

2. Install the required Node.js modules:

   ```bash
   npm install
   ```

3. Set up the environment variables by creating a `.env` file in the `weather-dashboard-backend` directory with the following content:

   ```env
   WEATHER_API_KEY=<YOUR_API_KEY>
   PLACES_API_KEY=<YOUR_API_KEY>
   ```

   WEATHER_API_KEY

   - Register at [OpenWeatherMap API](https://openweathermap.org/api).
   - Follow [this article](https://openweathermap.org/appid).

   PLACES_API_KEY

   - Register at [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview).
   - Follow [this article](https://developers.google.com/maps/documentation/places/web-service/get-api-key).

4. Start the backend development server:

   ```bash
   npm run dev
   ```

   The backend server should now be running on `http://localhost:3001`.

### Setting up the Frontend

1. Open a new terminal or command prompt window.

2. From the root directory, navigate to the frontend directory:

   ```bash
   cd weather-dashboard-frontend
   ```

3. Install the required Node.js modules:

   ```bash
   npm install
   ```

4. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend server should now be running on `http://localhost:3000`.

### Accessing the Application

After starting both the backend and frontend servers, you can access the web application by navigating to `http://localhost:3000` in your web browser. Ensure both servers are running concurrently to allow the frontend to communicate with the backend effectively.
