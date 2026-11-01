import type { Command, Ctx } from "../types.js";

export function yamlToJson(src: string): string {
  const obj: Record<string, unknown> = {};
  for (const raw of src.split("\n")) {
    const line = raw.trimEnd();
    if (!line || line.startsWith("#")) continue;
    const m = line.match(/^(\w[\w.-]*):(?:\s+(.*))?$/);
    if (!m) throw new Error("unsupported line: " + line);
    const value = (m[2] ?? "").trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      obj[m[1]] = value.slice(1, -1).split(",").map((s) => s.trim()).filter(Boolean);
    } else if (/^-?\d+(\.\d+)?$/.test(value)) {
      obj[m[1]] = Number(value);
    } else if (value === "true" || value === "false") {
      obj[m[1]] = value === "true";
    } else {
      obj[m[1]] = value.replace(/^["']|["']$/g, "");
    }
  }
  return JSON.stringify(obj);
}

export const cmd: Command = {
  name: "yaml-to-json",
  summary: "Convert simple flat YAML to JSON",
  run({ args, stdin }: Ctx): number {
    const src = (args[0] ?? stdin).trim();
    if (!src) { console.error("no YAML input"); return 1; }
    try {
      console.log(JSON.stringify(JSON.parse(yamlToJson(src)), null, 2));
      return 0;
    } catch (e) {
      console.error((e as Error).message);
      return 1;
    }
  },
};
