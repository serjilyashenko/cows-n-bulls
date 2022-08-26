import { COMPLEXITY } from "../const";

function isDigits(value: string): boolean {
  return !!value.match(/^[0-9]+$/);
}

export function onFlyGuessValidate(guess: string): boolean {
  if (guess === "") {
    return true;
  }
  if (!isDigits(guess)) {
    return false;
  }
  if (guess.length > COMPLEXITY) {
    return false;
  }

  return true;
}

export function submitGuessValidate(guess: string): boolean {
  if (guess.length !== COMPLEXITY) {
    return false;
  }
  if (!onFlyGuessValidate(guess)) {
    return false;
  }

  return true;
}
