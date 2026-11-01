import type { Command, Ctx } from "../types.js";

export function hexToRgb(hex: string): [number, number, number] {
  const m = hex.replace(/^#/, "").match(/^[0-9a-f]{6}$/i);
  if (!m) throw new Error("expected #rrggbb");
  const n = parseInt(m[0], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

export const cmd: Command = {
  name: "colorconv",
  summary: "Convert hex colors to RGB and back",
  run({ args, stdin }: Ctx): number {
    const input = (args[0] ?? stdin).trim();
    if (!input) { console.error("usage: devkit colorconv #ff8800 | 255,136,0"); return 1; }
    try {
      if (input.startsWith("#")) {
        const [r, g, b] = hexToRgb(input);
        console.log("rgb(" + r + ", " + g + ", " + b + ")");
      } else {
        const [r, g, b] = input.split(",").map((s) => Number(s.trim()));
        console.log(rgbToHex(r, g, b));
      }
      return 0;
    } catch (e) {
      console.error((e as Error).message);
      return 1;
    }
  },
};
