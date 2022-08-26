const options = "0123456789".split("").map(Number);

export function generateRiddleValue(size: number): string {
  const riddleValue: Array<number> = [];

  while (riddleValue.length < size || !options.length) {
    const randomIndex = Math.floor(Math.random() * options.length);

    riddleValue.push(options[randomIndex]);
    options.splice(randomIndex, 1);
  }

  return riddleValue.join("");
}
