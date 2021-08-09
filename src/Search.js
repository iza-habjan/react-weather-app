import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function getWeatherData(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "477355458f09adef7ea7ed5ab3947103";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getWeatherData);
  }

  function showWeather(event) {
    setCity(event.target.value);
  }

  let form = (
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
        <span className="date-time">Mon 9. Aug ⏰ 12:03</span>
      </form>
    </header>
  );

  let weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <h1>{city}</h1>
          </li>
          <li>
            <h6>{description}</h6>
          </li>
          <li>
            <img src={weatherIcon} alt={description} />
          </li>
          <li>
            <h1 className="degrees">{temperature}°C</h1>
          </li>
          <li className="humidity-wind">Humidity: {humidity}%</li>
          <li className="humidity-wind">Wind: {wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
