import React, { useState, useRef } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);

  const [weatherData, setWeatherData] = useState({ loaded: false });

  const searchButton = useRef(null);

  function getWeatherData(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].id,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });

    setCity("");

    if (searchButton.current) searchButton.current.focus();
  }

  function search() {
    let apiKey = "daa346289604c733eba9cb1d5b7d910d";
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
      <div className="Weather">
        <header>
          <form onSubmit={handleSubmit}>
            <div className="row search-row">
              <div className="col">
                <input
                  type="search"
                  placeholder="  🌍  Search City"
                  className="form-control"
                  onChange={handleCitySearch}
                  value={city}
                />
                <input
                  type="submit"
                  value=" 👀 "
                  className="button search-button"
                  ref={searchButton}
                />
                <input
                  type="submit"
                  value=" 📍 "
                  className="button location-button"
                />
              </div>
              <div className="col date-time">
                <FormattedDate date={weatherData.date} />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </header>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
