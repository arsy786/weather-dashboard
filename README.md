# Weather Dashboard

This is a basic weather app built using NodeJS and React. When a user enters a valid location into the search box, the current weather for that region is displayed.

## Installation

This project is divided into two main parts: the backend (API server) and the frontend (user interface). Follow these steps to set up and run both parts of the application.

### Prerequisites

- Node.js

### Cloning the Repo

1. Open your terminal or command prompt.

2. Clone the repository using Git:

   ```bash
   git clone https://github.com/arsy786/weather-dashboard.git
   ```

### Setting up the Backend

1. Navigate to the backend directory:

   ```bash
   cd weather-dashboard/weather-dashboard-backend
   ```

2. Install the required Node.js modules:

   ```bash
   npm install
   ```

3. Set up the environment variables by creating a `.env` file in the `weather-dashboard-backend` directory with the following content:

   ```env
   WEATHER_API_KEY=<YOUR_API_KEY>
   ```

   Note: To get an API key, register at [OpenWeatherMap API](https://openweathermap.org/api).
   <br>
   Note: For guidance on finding and using your key, see [this article](https://openweathermap.org/appid).

4. Start the backend development server:

   ```bash
   npm run dev
   ```

   The backend server should now be running on `http://localhost:3001`.

### Setting up the Frontend

1. Open a new terminal or command prompt window.

2. Navigate to the frontend directory from the root of the cloned repository:

   ```bash
   cd weather-dashboard/weather-dashboard-frontend
   ```

3. Install the required Node.js modules:

   ```bash
   npm install
   ```

4. Start the backend development server:

   ```bash
   npm run dev
   ```

   This command runs the frontend part of the app in development mode. Open `http://localhost:3000` to view it in your browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Accessing the Application

After starting both the backend and frontend servers, you can access the web application by navigating to `http://localhost:3000` in your web browser. Ensure both servers are running concurrently to allow the frontend to communicate with the backend effectively.
