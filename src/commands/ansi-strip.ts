import type { Command, Ctx } from "../types.js";

export function stripAnsi(text: string): string {
  return text.replace(/\u001B\[[0-9;]*[A-Za-z]/g, "").replace(/\u001B\][^\u0007]*\u0007/g, "");
}

export const cmd: Command = {
  name: "ansi-strip",
  summary: "Remove ANSI escape sequences from text",
  run({ args, stdin }: Ctx): number {
    const text = args.length ? args.join(" ") : stdin;
    if (!text) { console.error("no text"); return 1; }
    console.log(stripAnsi(text));
    return 0;
  },
};
