const SEED_WORDS_VALUE: unknown = import.meta.env.VITE_SEED_WORDS;

if (!(typeof SEED_WORDS_VALUE === "string")) {
  alert("Sorry. Something went wrong");
  throw new Error("There is no VITE_SEED_WORDS");
}
if (SEED_WORDS_VALUE.split(" ").length < 72) {
  alert("Sorry. Something went wrong");
  throw new Error("There are not enough seed words");
}

export const SEED_WORDS: Array<string> = SEED_WORDS_VALUE.split(" ");
