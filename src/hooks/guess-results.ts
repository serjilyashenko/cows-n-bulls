import { useEffect, useState } from "react";
import { calculateHint } from "../utils/hint";
import { TGuessResult, TUseGuessResults } from "./guess-results-types";

export function useGuessResults(riddle: string): TUseGuessResults {
  const [guessResults, setGuessResults] = useState<Array<TGuessResult>>([]);

  useEffect(() => {
    reset();
  }, [riddle]);

  function guess(guessValue: string): void {
    setGuessResults([
      ...guessResults,
      { guess: guessValue, hint: calculateHint(riddle, guessValue) },
    ]);
  }

  function reset(): void {
    setGuessResults([]);
  }

  return { guessResults, guess, reset };
}
