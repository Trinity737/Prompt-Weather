import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Toronto</h1>
      <ul>
        <li className="date">Wednesday 12:00pm</li>
        <li className="description">Partly Cloudy</li>
      </ul>
      <div className="float-left">
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
              alt="rain"
              className="float-left"
            />
            24°
            <a href="">C</a> | <a href="">F</a>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
