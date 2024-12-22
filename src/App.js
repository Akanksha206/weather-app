import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [location, setLocation] = useState("");//Stores the user's input for the city name.
  const [weather, setWeather] = useState(null);//Stores the fetched weather data.
  const [error, setError] = useState("");//Stores any error messages if the API request fails.

  const handleInputChange = (e) => setLocation(e.target.value);//Updates the location state whenever the user types in the input field.

  const fetchWeather = async () => {
    setError("");//Clears any previous error messages.
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2edac529d798fdb6afdc9d74f04df87a
&units=metric`
      );//Sends an HTTP request to the OpenWeatherMap API.
      if (!response.ok) throw new Error("Invalid location!");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Weather App</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter location"
          className="px-4 py-2 border rounded-md"
          value={location}
          onChange={handleInputChange}
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
