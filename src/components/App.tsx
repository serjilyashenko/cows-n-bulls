import { ReactElement } from "react";
import { useGuessResults } from "../hooks/guess-results";
import reactLogo from "../assets/react.svg";
import { Guess } from "./Guess";
import { Results } from "./Results";
import appStyles from "./App.module.scss";
import "./App.css";

const riddleValue = Math.round(Math.random() * 1000).toString();

export function App(): ReactElement {
  const { guessResults, guess } = useGuessResults(riddleValue);

  return (
    <div className={appStyles.container}>
      <div className={appStyles.content}>
        <div>
          <header>
            <h1>🐮 Cows & Bulls</h1>
          </header>

          <main>
            <div className={appStyles.guess_form_container}>
              <Guess onGuess={guess} />
            </div>
            <Results results={guessResults} />
          </main>
        </div>
      </div>

      <footer className={appStyles.footer}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </div>
  );
}
