import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p className="text-gray-700 capitalize">
        {weather.weather[0].description}
      </p>
      <p className="text-2xl">{weather.main.temp}°C</p>
      <div className="flex justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="text-gray-600 mt-2">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
