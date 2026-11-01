import type { Command, Ctx } from "../types.js";

export function b64(text: string, decode: boolean, url: boolean): string {
  const enc = url ? "base64url" : "base64";
  return decode
    ? Buffer.from(text, enc).toString("utf8")
    : Buffer.from(text, "utf8").toString(enc);
}

export const cmd: Command = {
  name: "b64",
  summary: "Base64 encode/decode (also base64url)",
  run({ args, stdin }: Ctx): number {
    const decode = args.includes("--decode");
    const encode = args.includes("--encode");
    if (decode === encode) { console.error("choose --encode or --decode"); return 1; }
    const text = args.filter((a) => !a.startsWith("--")).join(" ") || stdin.trim();
    if (!text) { console.error("no input"); return 1; }
    console.log(b64(text, decode, args.includes("--url")));
    return 0;
  },
};
