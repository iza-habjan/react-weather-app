import React from "react";

export default function WeatherIcon(props) {
  const drizzle = "300-521-drizzle";
  const rain = "302-531-rain";
  const snow = "600-622-snow";
  const thunderstormRain = "200-232-thunderstorm-rain";
  const thunderstorm = "210-221-thunderstorm";
  const dust = "731-761-dust";
  
  const codeMapping = {
    800: "800-clear-sky",
    801: "801-few-clouds",
    802: "802-scattered-clouds",
    803: "803-broken-clouds",
    804: "804-overcast clouds",
    300: drizzle,
    301: drizzle,
    302: rain,
    310: drizzle,
    311: drizzle,
    312: rain,
    313: rain,
    314: rain,
    321: drizzle,
    500: drizzle,
    501: drizzle,
    502: rain,
    503: rain,
    504: rain,
    520: drizzle,
    521: drizzle,
    522: rain,
    531: rain,
    511: "511-freezing-rain",
    600: snow,
    601: snow,
    611: snow,
    612: snow,
    613: snow,
    615: snow,
    616: snow,
    620: snow,
    621: snow,
    622: snow,
    200: thunderstormRain,
    201: thunderstormRain,
    202: thunderstormRain,
    230: thunderstormRain,
    231: thunderstormRain,
    232: thunderstormRain,
    210: thunderstorm,
    211: thunderstorm,
    212: thunderstorm,
    221: thunderstorm,
    701: "701-mist",
    721: "721-haze",
    741: "741-fog",
    781: "781-tornado",
    711: "711-smoke",
    731: dust,
    751: dust,
    761: dust,
    762: "762-volcanic-ash",
    771: "771-squalls",
  };

  return (
    <div>
      <img src={`images/${codeMapping[props.code]}.svg`} alt={props.alt} />
    </div>
  );
}
