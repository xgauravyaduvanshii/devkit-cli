import type { Command, Ctx } from "../types.js";

export function jsonToYaml(src: string): string {
  const value = JSON.parse(src);
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error("expected a flat JSON object");
  }
  return Object.entries(value)
    .map(([k, v]) => {
      if (Array.isArray(v)) return k + ": [" + v.join(", ") + "]";
      if (typeof v === "object" && v !== null) return k + ": " + JSON.stringify(v);
      return k + ": " + String(v);
    })
    .join("\n");
}

export const cmd: Command = {
  name: "json-to-yaml",
  summary: "Emit flat JSON objects as YAML",
  run({ args, stdin }: Ctx): number {
    const src = (args[0] ?? stdin).trim();
    if (!src) { console.error("no JSON input"); return 1; }
    try {
      console.log(jsonToYaml(src));
      return 0;
    } catch (e) {
      console.error((e as Error).message);
      return 1;
    }
  },
};
