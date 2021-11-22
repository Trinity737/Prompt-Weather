import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Toronto</h1>
        <ul>
          <li className="date">Wednesday 12:00pm</li>
          <li className="description">Partly Cloudy</li>
        </ul>
        <div className="float-left">
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                  alt="rain"
                  className="float-left"
                />
                <span className="float-left">
                  <span className="temperature">{temperature}</span>
                  <span className="unit">℃</span>
                </span>
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
      </div>
    );
  } else {
    const apiKey = "3e2ce69ce76e734e0f6e4dbc39c85c56";
    let city = "Toronto";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
