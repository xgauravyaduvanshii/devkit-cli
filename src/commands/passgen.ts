import { randomInt } from "node:crypto";
import type { Command, Ctx } from "../types.js";

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = LOWER.toUpperCase();
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{}";

export function genPassword(length: number, symbols: boolean): string {
  const pool = symbols ? LOWER + UPPER + DIGITS + SYMBOLS : LOWER + UPPER + DIGITS;
  let out = "";
  for (let i = 0; i < length; i++) out += pool[randomInt(pool.length)];
  return out;
}

export const cmd: Command = {
  name: "passgen",
  summary: "Generate random passwords (CSPRNG)",
  run({ args }: Ctx): number {
    const idx = args.indexOf("--length");
    const length = idx >= 0 ? Math.min(Math.max(Number(args[idx + 1]) || 16, 4), 256) : 16;
    console.log(genPassword(length, args.includes("--symbols")));
    return 0;
  },
};
