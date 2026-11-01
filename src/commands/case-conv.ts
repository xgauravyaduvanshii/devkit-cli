import type { Command, Ctx } from "../types.js";

function words(text: string): string[] {
  return text
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((w) => w.toLowerCase());
}

export function convert(text: string, kind: string): string {
  const ws = words(text);
  switch (kind) {
    case "--camel": return ws[0] + ws.slice(1).map((w) => w[0].toUpperCase() + w.slice(1)).join("");
    case "--pascal": return ws.map((w) => w[0].toUpperCase() + w.slice(1)).join("");
    case "--snake": return ws.join("_");
    case "--kebab": return ws.join("-");
    default: throw new Error("unknown case: " + kind);
  }
}

export const cmd: Command = {
  name: "case-conv",
  summary: "Convert between camel/snake/kebab/pascal case",
  run({ args, stdin }: Ctx): number {
    const kind = args.find((a) => a.startsWith("--"));
    const text = args.filter((a) => a !== kind).join(" ") || stdin.trim();
    if (!kind || !text) { console.error("usage: " + "devkit case-conv --snake my_text"); return 1; }
    try {
      console.log(convert(text, kind));
      return 0;
    } catch (e) {
      console.error((e as Error).message);
      return 1;
    }
  },
};
