import { THint } from "./hint-types";

/* eslint-disable */
export function calculateHint(riddle: string, guess: string): THint {
  const riddleArray = riddle.split("");
  const guessArray = guess.split("");

  let cows: number = 0;
  let bulls: number = 0;

  for (let index = 0; index < guessArray.length; index++) {
    if (riddleArray[index] === guessArray[index]) {
      bulls++;
      continue;
    }
    if (riddleArray.includes(guessArray[index] || "")) {
      cows++;
    }
  }

  return {
    cows,
    bulls,
  };
}
