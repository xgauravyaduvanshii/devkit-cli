import type { Command, Ctx } from "../types.js";

export function parseQuery(qs: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of new URLSearchParams(qs)) out[k] = v;
  return Object.fromEntries(Object.entries(out).sort((a, b) => a[0].localeCompare(b[0])));
}

export const cmd: Command = {
  name: "qstr",
  summary: "Parse a URL query string into sorted JSON",
  run({ args, stdin }: Ctx): number {
    const qs = (args[0] ?? stdin).trim().replace(/^\?/, "");
    if (!qs) { console.error("no query string"); return 1; }
    console.log(JSON.stringify(parseQuery(qs), null, 2));
    return 0;
  },
};
