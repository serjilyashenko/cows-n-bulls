function isDigits(value: string): boolean {
  return !!value.match(/^[0-9]+$/);
}

function isUniq(array: Array<unknown>): boolean {
  return array.every(
    (value) => array.filter((innerValue) => innerValue === value).length <= 1
  );
}

export function onFlyGuessValidate(
  complexity: number,
  guessValue: string
): boolean {
  if (guessValue === "") {
    return true;
  }
  if (!isDigits(guessValue)) {
    return false;
  }
  if (guessValue.length > complexity) {
    return false;
  }
  if (!isUniq(guessValue.split(""))) {
    return false;
  }

  return true;
}

export function submitGuessValidate(
  complexity: number,
  guessValue: string
): boolean {
  if (guessValue.length !== complexity) {
    return false;
  }
  if (!onFlyGuessValidate(complexity, guessValue)) {
    return false;
  }

  return true;
}
