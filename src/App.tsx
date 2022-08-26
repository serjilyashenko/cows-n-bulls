import { ChangeEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import appStyles from "./App.module.scss";
import "./App.css";

export default function App() {
  const [guessValue, setGuessValue] = useState<string>("000");

  function onGuessChange(event: ChangeEvent<HTMLInputElement>) {
    const guessInput = event.target;

    setGuessValue(guessInput.value);
  }

  return (
    <div className={appStyles.container}>
      <div className={appStyles.content}>
        <div>
          <header>
            <h1>🐮 Cows & Bulls</h1>
          </header>

          <main>
            <form className={appStyles.guess_form}>
              <input
                autoFocus
                className={appStyles.guess}
                value={guessValue}
                onChange={onGuessChange}
              />
              <button>🔎</button>
            </form>
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
