import type { Command, Ctx } from "../types.js";

export function formatJson(src: string, minify: boolean, indent: number): string {
  const value = JSON.parse(src);
  return minify ? JSON.stringify(value) : JSON.stringify(value, null, indent);
}

export const cmd: Command = {
  name: "json-fmt",
  summary: "Pretty-print or minify JSON",
  run({ args, stdin }: Ctx): number {
    const src = (args.find((a) => !a.startsWith("--")) ?? stdin).trim();
    if (!src) { console.error("no JSON input"); return 1; }
    const indentIdx = args.indexOf("--indent");
    const indent = indentIdx >= 0 ? Number(args[indentIdx + 1]) || 2 : 2;
    try {
      console.log(formatJson(src, args.includes("--minify"), indent));
      return 0;
    } catch (e) {
      console.error("invalid JSON: " + (e as Error).message);
      return 1;
    }
  },
};
