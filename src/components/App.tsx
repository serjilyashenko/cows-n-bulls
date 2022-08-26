import { ReactElement, useMemo, useState } from "react";
import { useGuessResults } from "../hooks/guess-results";
import reactLogo from "../assets/react.svg";
import { generateRiddleValue } from "../utils/riddle";
import { Guess } from "./Guess";
import { Results } from "./Results";
import { Win } from "./Win";
import appStyles from "./App.module.scss";
import "./App.css";

export function App(): ReactElement {
  const [complexity, setComplexity] = useState<number>(4);
  const [resetTrigger, setResetTrigger] = useState<number>(0);
  const riddleValue = useMemo<string>(
    () => generateRiddleValue(complexity),
    [complexity, resetTrigger]
  );
  const {
    guessResults,
    guess,
    reset: resetResults,
  } = useGuessResults(riddleValue);
  const isWin = guessResults[guessResults.length - 1]?.guess === riddleValue;

  function onReset() {
    setResetTrigger(Date.now());
    resetResults();
  }

  return (
    <div className={appStyles.container}>
      <div className={appStyles.content}>
        <div>
          <header>
            <h1 className={appStyles.title}>
              🐮 Cows & Bulls
              <select
                className={appStyles.complexity}
                onChange={(event) => setComplexity(Number(event.target.value))}
                value={complexity}
              >
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </h1>
          </header>

          <main>
            <div className={appStyles.guess_form_container}>
              {isWin ? (
                <Win tries={guessResults.length} onReset={onReset} />
              ) : (
                <Guess complexity={complexity} onGuess={guess} />
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
