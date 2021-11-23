import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
      </div>
      <footer>
        <small>
          This project was coded by Cheavon Pottinger and is{" "}
          <a
            href="https://github.com/Trinity737/Prompt-Weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          <a href="" target="_blank" rel="noreferrer">
            and hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
