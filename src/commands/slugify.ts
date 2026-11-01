import type { Command, Ctx } from "../types.js";

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const cmd: Command = {
  name: "slugify",
  summary: "Turn any text into a URL-safe slug",
  run({ args, stdin }: Ctx): number {
    const text = args.length ? args.join(" ") : stdin.trim();
    if (!text) { console.error("no text"); return 1; }
    console.log(slugify(text));
    return 0;
  },
};
