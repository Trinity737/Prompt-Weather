import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>Prompt Weather</h1>
        <ul>
          <li className="date">Wednesday 12:00pm</li>
          <li className="description">Partly Cloudy</li>
        </ul>
      </header>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
        alt="rain"
        className="float-left"
      />
      <div className="float-left">
        <div className="row">
          <div className="col-6">24°</div>
          <a href="">C</a> | <a href="">F</a>
        </div>
        <ul>
          <li>Humidity: 80%</li>
          <li>Wind: 5 km/h</li>
        </ul>
      </div>
      <WeatherForecast />
      <footer>
        This project was coded by Cheavon Pottinger and is{" "}
        <a
          href="https://github.com/Trinity737/Prompt-Weather"
          target="_blank"
          alt="noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
