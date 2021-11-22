import React from "./react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherFoecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast-day">
      <div className="row">
        <div className="col">
          Thu
          <WeatherIcon code="01d" />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
