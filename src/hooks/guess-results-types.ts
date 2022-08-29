import { THint } from "../utils/hint-types";

export type TGuessResult = {
  guess: string;
  hint: THint;
};

export type TUseGuessResults = {
  guessResults: Array<TGuessResult>;
  guess: (guessValue: string) => void;
};
