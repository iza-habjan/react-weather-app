import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <span className="date-time">
        <FormattedDate date={props.data.date} />
      </span>
      <ul>
        <li>
          <h1>{props.data.city}</h1>
        </li>
        <li>
          <h6>{props.data.description}</h6>
        </li>
        <li>
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </li>
        <li>
          <WeatherTemperature celsius={props.data.temperature} />
        </li>
        <li className="humidity-wind">Humidity: {props.data.humidity}%</li>
        <li className="humidity-wind">Wind: {props.data.wind}km/h</li>
      </ul>
    </div>
  );
}
