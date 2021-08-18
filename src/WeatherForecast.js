import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    const daily = [];

    for (let index = 0; index < 7; index++)
      daily.push(response.data.daily[index]);

    setForecast(daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "daa346289604c733eba9cb1d5b7d910d";
    let units = "metric";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
    let apiUrl = `${apiEndpoint}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
