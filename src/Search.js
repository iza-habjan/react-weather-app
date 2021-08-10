import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";

import "./Search.css";

export default function Search(props) {
  const [icon, setIcon] = useState(null);

  const [weatherData, setWeatherData] = useState({ loaded: false });

  function getWeatherData(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.coord.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "477355458f09adef7ea7ed5ab3947103";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getWeatherData);
  }

  function showWeather(event) {
    setWeatherData(event.target.value);
  }

  let weatherIcon = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

  if (weatherData.loaded) {
    return (
      <div>
        <header className="App-header">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="🌍 Search City"
              className="form-control"
              onChange={showWeather}
            />
            <input
              type="submit"
              value="👀"
              className="button"
              onClick={handleSubmit}
            />
            <input type="submit" value="📍" className="button" />
            <span className="date-time">
              <FormattedDate date={weatherData.date} />
              Mon 9. Aug ⏰ 12:03
            </span>
          </form>
        </header>
        <div>
          <ul>
            <li>
              <h1>Munich</h1>
            </li>
            <li>
              <h6>{weatherData.description}</h6>
            </li>
            <li>
              <img src={weatherData.icon} alt={weatherData.description} />
            </li>
            <li>
              <h1 className="degrees">{weatherData.temperature}°C</h1>
            </li>
            <li className="humidity-wind">Humidity: {weatherData.humidity}%</li>
            <li className="humidity-wind">Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    );
  } else {
    let apiKey = "477355458f09adef7ea7ed5ab3947103";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getWeatherData);

    return "Loading...";
  }
}
