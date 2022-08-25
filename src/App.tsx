import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
  return (
    <main className="App">
      <div>
        <header>
          <h1>🐮 Cows & Bulls</h1>
        </header>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </main>
  );
}
