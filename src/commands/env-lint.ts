import type { Command, Ctx } from "../types.js";

export function lintEnv(src: string): string[] {
  const problems: string[] = [];
  const seen = new Map<string, number>();
  src.split(/\r?\n/).forEach((line, i) => {
    if (!line.trim() || line.trim().startsWith("#")) return;
    const eq = line.indexOf("=");
    if (eq < 0) { problems.push("line " + (i + 1) + ": no equals sign"); return; }
    const key = line.slice(0, eq);
    const value = line.slice(eq + 1);
    if (key !== key.trim() || /\s/.test(key)) problems.push("line " + (i + 1) + ": whitespace in key");
    if (value.startsWith(" ") || value.endsWith(" ")) problems.push("line " + (i + 1) + ": padded value");
    if (seen.has(key)) problems.push("duplicate key: " + key);
    seen.set(key, i);
  });
  return problems;
}

export const cmd: Command = {
  name: "env-lint",
  summary: "Lint .env content",
  run({ args, stdin }: Ctx): number {
    const src = args[0] ?? stdin;
    if (!src.trim()) { console.error("no .env content"); return 1; }
    const problems = lintEnv(src);
    for (const p of problems) console.log(p);
    console.log(problems.length ? problems.length + " problem(s)" : "clean");
    return problems.length ? 1 : 0;
  },
};
