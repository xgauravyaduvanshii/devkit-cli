import type { Command, Ctx } from "../types.js";

export function keyPaths(value: unknown, prefix = ""): string[] {
  const out: string[] = [];
  if (Array.isArray(value)) {
    value.forEach((v, i) => out.push(...keyPaths(v, prefix + "[" + i + "]")));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      const p = prefix ? prefix + "." + k : k;
      out.push(p);
      out.push(...keyPaths(v, p));
    }
  }
  return out;
}

export const cmd: Command = {
  name: "json-keys",
  summary: "List all key paths in a JSON document",
  run({ args, stdin }: Ctx): number {
    const src = (args[0] ?? stdin).trim();
    if (!src) { console.error("no JSON input"); return 1; }
    try {
      for (const p of keyPaths(JSON.parse(src))) console.log(p);
      return 0;
    } catch {
      console.error("invalid JSON");
      return 1;
    }
  },
};
