import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
          <h1 className="degrees">{props.data.temperature}°C</h1>
        </li>
        <li className="humidity-wind">Humidity: {props.data.humidity}%</li>
        <li className="humidity-wind">Wind: {props.data.wind}km/h</li>
      </ul>
    </div>
  );
}
