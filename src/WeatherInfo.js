import React from "react";

import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo container">
      <h1>{props.data.city}</h1>
      <h6>{props.data.description}</h6>
      <div className="row">
        <div className="col">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            width={200}
          />
        </div>
        <div className="col">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col">
          <div>
            <div className="humidity-wind humidity">
              {props.data.humidity}
              <img
                src="images/humidity.svg"
                alt="humidity-icon"
                className="humidity-icon"
              />
            </div>
            <div className="humidity-wind">
              <img
                src="images/wind.svg"
                alt="wind-icon"
                className="wind-icon"
              />
              {props.data.wind}km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
