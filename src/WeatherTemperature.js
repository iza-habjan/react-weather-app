import React, { useState } from "react";

import "./WeatherTemperature.css";

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
      <div>
        <h1 className="degrees">
          {props.celsius}
          <span>
            °C <span className="divider"> | </span>
            <span>
              <a href="/" className="fahrenheit" onClick={displayFahrenheit}>
                °F
              </a>
            </span>
          </span>
        </h1>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <h1 className="degrees">
          {Math.round(fahrenheit)}
          <span>
            <a href="/" className="celsius" onClick={displayCelsius}>
              °C
            </a>
          </span>
          <span>
            <span className="divider"> | </span>
            °F
          </span>
        </h1>
      </div>
    );
  }
}
