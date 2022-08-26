import { ReactElement } from "react";
import { Guess } from "./Guess";
import reactLogo from "../assets/react.svg";
import appStyles from "./App.module.scss";
import "./App.css";

// const riddleValue = Math.round(Math.random() * 1000).toString();

export function App(): ReactElement {
  function onGuess(guess: string) {
    console.log("guess: ", guess);
  }

  return (
    <div className={appStyles.container}>
      <div className={appStyles.content}>
        <div>
          <header>
            <h1>🐮 Cows & Bulls</h1>
          </header>

          <main>
            <Guess onGuess={onGuess} />
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
