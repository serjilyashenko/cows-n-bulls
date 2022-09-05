import { ReactElement, useMemo, useState } from "react";
import { useGuessResults } from "../hooks/guess-results";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.png";
import { generateRiddleValue } from "../utils/riddle";
import {
  INITIAL_LEVEL,
  INITIAL_SUB_LEVEL,
  saveProgress,
} from "../utils/initial-level";
import { MAX_COMPLEXITY, SUB_LEVEL_COUNT } from "../const";
import { Guess } from "./Guess";
import { Results } from "./Results";
import { FireWorks } from "./FireWorks";
import { Win } from "./Win";
import appStyles from "./App.module.scss";
import "./App.css";

export function App(): ReactElement {
  const [level, setLevel] = useState<number>(INITIAL_LEVEL);
  const [subLevel, setSubLevel] = useState<number>(INITIAL_SUB_LEVEL);
  const complexity = level + 1;
  const riddleValue = useMemo<string>(
    () => generateRiddleValue(complexity),
    [complexity, subLevel]
  );
  const { guessResults, guess } = useGuessResults(riddleValue);
  const isLevelWin =
    guessResults[guessResults.length - 1]?.guess === riddleValue;
  const isGameWin = complexity > MAX_COMPLEXITY + 1;

  function onGuess(guessValue: string) {
    guess(guessValue);
    if (guessValue === riddleValue) {
      saveProgress(level, subLevel);
    }
  }

  function onNext() {
    if (subLevel >= SUB_LEVEL_COUNT) {
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
              {isLevelWin || isGameWin ? (
                <Win
                  riddle={riddleValue}
                  tries={guessResults.length}
                  isGameWin={isGameWin}
                  onNext={onNext}
                />
              ) : (
                <Guess complexity={complexity} onGuess={onGuess} />
              )}
            </div>
            <Results results={guessResults} />
          </main>
        </div>
      </div>

      <footer className={appStyles.footer}>
        <a
          href="https://github.com/serjilyashenko/cows-n-bulls"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} className="logo" alt="GitHub logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </footer>
      {isGameWin && <FireWorks />}
    </div>
  );
}
