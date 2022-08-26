import { ReactElement } from "react";
import { useGuessResults } from "../hooks/guess-results";
import reactLogo from "../assets/react.svg";
import { generateRiddleValue } from "../utils/riddle";
import { COMPLEXITY } from "../const";
import { Guess } from "./Guess";
import { Results } from "./Results";
import { Win } from "./Win";
import appStyles from "./App.module.scss";
import "./App.css";

const riddleValue = generateRiddleValue(COMPLEXITY);

export function App(): ReactElement {
  const { guessResults, guess, reset } = useGuessResults(riddleValue);
  const isWin = guessResults[guessResults.length - 1]?.guess === riddleValue;

  return (
    <div className={appStyles.container}>
      <div className={appStyles.content}>
        <div>
          <header>
            <h1>🐮 Cows & Bulls</h1>
          </header>

          <main>
            <div className={appStyles.guess_form_container}>
              {isWin ? (
                <Win tries={guessResults.length} onReset={reset} />
              ) : (
                <Guess onGuess={guess} />
              )}
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
