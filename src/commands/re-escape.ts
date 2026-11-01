import type { Command, Ctx } from "../types.js";

export function escapeRe(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const cmd: Command = {
  name: "re-escape",
  summary: "Escape a string for safe use inside a RegExp",
  run({ args, stdin }: Ctx): number {
    const text = args.length ? args.join(" ") : stdin.replace(/\n$/, "");
    if (!text) { console.error("no text"); return 1; }
    console.log(escapeRe(text));
    return 0;
  },
};
