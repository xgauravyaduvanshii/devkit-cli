import { createHash } from "node:crypto";
import type { Command, Ctx } from "../types.js";

export function checksum(text: string): string {
  const hex = createHash("sha256").update(text, "utf8").digest("hex").slice(0, 16);
  return hex + " " + Buffer.byteLength(text, "utf8") + " bytes";
}

export const cmd: Command = {
  name: "checksum",
  summary: "SHA-256 checksum plus byte count",
  run({ args, stdin }: Ctx): number {
    const text = args[0] ?? stdin;
    if (!text) { console.error("no input"); return 1; }
    console.log(checksum(text));
    return 0;
  },
};
