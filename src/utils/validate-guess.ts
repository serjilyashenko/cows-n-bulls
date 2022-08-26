import { COMPLEXITY } from "../const";

function isDigits(value: string): boolean {
  return !!value.match(/^[0-9]+$/);
}

export function onFlyGuessValidate(guessValue: string): boolean {
  if (guessValue === "") {
    return true;
  }
  if (!isDigits(guessValue)) {
    return false;
  }
  if (guessValue.length > COMPLEXITY) {
    return false;
  }

  return true;
}

export function submitGuessValidate(guessValue: string): boolean {
  if (guessValue.length !== COMPLEXITY) {
    return false;
  }
  if (!onFlyGuessValidate(guessValue)) {
    return false;
  }

  return true;
}
