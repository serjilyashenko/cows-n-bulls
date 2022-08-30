import { SUB_LEVEL_COUNT } from "../const";
import { SEED_WORDS } from "./seed-words";

const storeKey = "seed_word_v1";
const storedValue: unknown = localStorage.getItem(storeKey);
const storedSeed =
  typeof storedValue === "string" && SEED_WORDS.includes(storedValue)
    ? storedValue
    : (SEED_WORDS[0] as string);
const seedIndex = SEED_WORDS.indexOf(storedSeed);

export const INITIAL_LEVEL = Math.floor(seedIndex / SUB_LEVEL_COUNT) + 1;
export const INITIAL_SUB_LEVEL = (seedIndex % SUB_LEVEL_COUNT) + 1;

export function saveProgress(level: number, subLevel: number): void {
  const currentSeedIndex = (level - 1) * SUB_LEVEL_COUNT + subLevel;
  localStorage.setItem(storeKey, SEED_WORDS[currentSeedIndex] || "");
}
