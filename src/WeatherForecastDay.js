import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].id} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">{maxTemperature()}</span>
        <span className="WeatherForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
