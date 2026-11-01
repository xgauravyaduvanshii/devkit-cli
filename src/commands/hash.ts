import { createHash } from "node:crypto";
import type { Command, Ctx } from "../types.js";

const ALLOWED = new Set(["sha256", "sha1", "md5"]);

export function digest(text: string, algo: string): string {
  if (!ALLOWED.has(algo)) throw new Error("algo must be one of " + [...ALLOWED].join(", "));
  return createHash(algo).update(text, "utf8").digest("hex");
}

export const cmd: Command = {
  name: "hash",
  summary: "Hash text or stdin with sha256/sha1/md5",
  run({ args, stdin }: Ctx): number {
    const idx = args.indexOf("--algo");
    const algo = idx >= 0 ? args[idx + 1] : "sha256";
    const text = (args.filter((a) => !a.startsWith("--") && a !== algo)[0] ?? stdin).trimEnd();
    if (!text) { console.error("no input"); return 1; }
    try {
      console.log(digest(text, algo));
      return 0;
    } catch (e) {
      console.error((e as Error).message);
      return 1;
    }
  },
};
