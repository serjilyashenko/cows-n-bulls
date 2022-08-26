import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import {
  onFlyGuessValidate,
  submitGuessValidate,
} from "../utils/validate-guess";
import { GUESS_PLACEHOLDER } from "../const";
import guessStyles from "./Guess.module.scss";

type PropsType = {
  onGuess: (value: string) => void;
};

export function Guess(props: PropsType): ReactElement {
  const { onGuess } = props;
  const [guessValue, setGuessValue] = useState<string>("");

  const isGuessValid = submitGuessValidate(guessValue);

  function onGuessChange(event: ChangeEvent<HTMLInputElement>): void {
    const guess = event.target.value;

    if (onFlyGuessValidate(guess)) {
      setGuessValue(guess);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (isGuessValid) {
      onGuess(guessValue);
    }
  }

  return (
    <form onSubmit={onSubmit} className={guessStyles.guess_form}>
      <input
        autoFocus
        className={guessStyles.guess}
        value={guessValue}
        onChange={onGuessChange}
        placeholder={GUESS_PLACEHOLDER}
      />
      <button type="submit" disabled={!isGuessValid}>
        🔎
      </button>
    </form>
  );
}
