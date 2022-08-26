import { useState } from "react";
import { calculateHint } from "../utils/hint";
import { TGuessResult } from "./guess-results-types";

export function useGuessResults(riddle: string) {
  const [guessResults, setGuessResults] = useState<Array<TGuessResult>>([]);

  function guess(guessValue: string): void {
    setGuessResults([
      ...guessResults,
      { guess: guessValue, hint: calculateHint(riddle, guessValue) },
    ]);
  }

  return { guessResults, guess };
}
