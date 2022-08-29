import { ReactElement, useMemo, useState } from "react";
import { useGuessResults } from "../hooks/guess-results";
import reactLogo from "../assets/react.svg";
import { generateRiddleValue } from "../utils/riddle";
import { Guess } from "./Guess";
import { Results } from "./Results";
import { Win } from "./Win";
import appStyles from "./App.module.scss";
import "./App.css";

const maxComplexity = 10;
const subLevelCount = 3;

export function App(): ReactElement {
  const [level, setLevel] = useState<number>(1);
  const [subLevel, setSubLevel] = useState<number>(1);
  const complexity = Math.min(maxComplexity, level + 1);
  const riddleValue = useMemo<string>(
    () => generateRiddleValue(complexity),
    [complexity, subLevel]
  );
  const { guessResults, guess } = useGuessResults(riddleValue);
  const isWin = guessResults[guessResults.length - 1]?.guess === riddleValue;

  function onNext() {
    if (subLevel >= subLevelCount) {
      setSubLevel(1);
      setLevel((prev) => prev + 1);
    } else {
      setSubLevel((prev) => prev + 1);
    }
  }

  return (
    <div className={appStyles.container}>
      <div className={appStyles.content}>
        <div>
          <header>
            <h1 className={appStyles.title}>🐮 Cows & Bulls</h1>
            <h4 className={appStyles.sub_title}>
              Level: {level}.{subLevel}
            </h4>
          </header>

          <main>
            <div className={appStyles.guess_form_container}>
              {isWin ? (
                <Win tries={guessResults.length} onNext={onNext} />
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
