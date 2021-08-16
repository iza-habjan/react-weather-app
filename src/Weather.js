import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

import "./Search.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);

  const [weatherData, setWeatherData] = useState({ loaded: false });

  function getWeatherData(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    let apiKey = "477355458f09adef7ea7ed5ab3947103";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div>
        <header className="App-header">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="🌍 Search City"
              className="form-control"
              onChange={handleCitySearch}
            />
            <input type="submit" value="👀" className="button" />
            <input type="submit" value="📍" className="button" />
          </form>
          <WeatherInfo data={weatherData} />
        </header>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
