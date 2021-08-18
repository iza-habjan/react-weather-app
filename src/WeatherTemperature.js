import React, { useState } from "react";

import "./WeatherInfo.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <li>
        <h1 className="degrees">{props.celsius}</h1>
        <span>
          °C <span className="divider"> | </span>
          <a href="/#" className="fahrenheit" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </li>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <li>
        <h1 className="degrees">{Math.round(fahrenheit)}</h1>
        <span>
          <a href="/#" className="celsius" onClick={displayCelsius}>
            °C
          </a>{" "}
          <span className="divider"> | </span>
          °F
        </span>
      </li>
    );
  }
}