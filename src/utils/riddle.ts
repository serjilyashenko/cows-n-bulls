export function generateRiddleValue(size: number): string {
  const options = "0123456789".split("").map(Number);
  const riddleValue: Array<number> = [];

  while (riddleValue.length < size) {
    const randomIndex = Math.floor(Math.random() * options.length);

    riddleValue.push(options[randomIndex] as number);
    options.splice(randomIndex, 1);
  }

  return riddleValue.join("");
}
