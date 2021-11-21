import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
    </div>
  );
}
