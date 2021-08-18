import React from "react";

import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h6>{props.data.description}</h6>
      <div class="row">
        <ul>
          <div className="col-4">
            <li>
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                width={200}
              />
            </li>
          </div>
          <div className="col-4">
            <li>
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
          </div>
          <div className="col-2">
            <li className="humidity-wind">
              {props.data.humidity}
              <img
                src="images/humidity.svg"
                alt="humidity-icon"
                className="humidity-icon"
              />
            </li>
          </div>
          <div className="col-2">
            <li className="humidity-wind">
              {" "}
              <img
                src="images/wind.svg"
                alt="wind-icon"
                className="wind-icon"
              />
              {props.data.wind}km/h
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
