import type { Command, Ctx } from "../types.js";

export function diffLines(a: string[], b: string[]): string[] {
  const out: string[] = [];
  const n = a.length;
  const m = b.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { out.push("  " + a[i]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { out.push("-" + a[i]); i++; }
    else { out.push("+" + b[j]); j++; }
  }
  while (i < n) out.push("-" + a[i++]);
  while (j < m) out.push("+" + b[j++]);
  return out;
}

export const cmd: Command = {
  name: "diff-lines",
  summary: "Line diff between two texts separated by ::",
  run({ args, stdin }: Ctx): number {
    const raw = (args[0] ?? stdin).trim();
    const halves = raw.split("::");
    if (halves.length !== 2) { console.error("need A::B"); return 1; }
    for (const line of diffLines(halves[0].split(","), halves[1].split(","))) console.log(line);
    return 0;
  },
};
