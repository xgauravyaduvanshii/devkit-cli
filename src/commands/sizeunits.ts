import type { Command, Ctx } from "../types.js";

const UNITS = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"];

export function humanBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) throw new Error("bytes must be a non-negative number");
  let v = bytes;
  let i = 0;
  while (v >= 1024 && i < UNITS.length - 1) { v /= 1024; i++; }
  return (i === 0 ? String(v) : v.toFixed(2)) + " " + UNITS[i];
}

export const cmd: Command = {
  name: "sizeunits",
  summary: "Convert byte counts to human units",
  run({ args, stdin }: Ctx): number {
    const raw = (args[0] ?? stdin).trim();
    if (!/^\d+$/.test(raw)) { console.error("expected integer bytes"); return 1; }
    console.log(humanBytes(Number(raw)));
    return 0;
  },
};
