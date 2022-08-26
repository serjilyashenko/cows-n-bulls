import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import {
  onFlyGuessValidate,
  submitGuessValidate,
} from "../utils/validate-guess";
import guessStyles from "./Guess.module.scss";

type PropsType = {
  complexity: number;
  onGuess: (value: string) => void;
};

export function Guess(props: PropsType): ReactElement {
  const { complexity, onGuess } = props;
  const [guessValue, setGuessValue] = useState<string>("");

  const isGuessValid = submitGuessValidate(complexity, guessValue);
  const guessPlaceholder: string = Array.from(
    { length: complexity },
    () => "*"
  ).join("");

  function onGuessChange(event: ChangeEvent<HTMLInputElement>): void {
    const guess = event.target.value;

    if (onFlyGuessValidate(complexity, guess)) {
      setGuessValue(guess);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (isGuessValid) {
      onGuess(guessValue);
      setGuessValue("");
    }
  }

  return (
    <form onSubmit={onSubmit} className={guessStyles.guess_form}>
      <input
        autoFocus
        className={guessStyles.guess}
        value={guessValue}
        onChange={onGuessChange}
        placeholder={guessPlaceholder}
        style={{ width: `calc(42px * ${complexity})` }}
      />
      <button type="submit" disabled={!isGuessValid}>
        🔎
      </button>
    </form>
  );
}
