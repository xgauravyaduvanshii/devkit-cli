import type { Command, Ctx } from "../types.js";

function b64urlJson(part: string): unknown {
  const json = Buffer.from(part, "base64url").toString("utf8");
  return JSON.parse(json);
}

export function decodeJwt(token: string): { header: unknown; payload: unknown } {
  const parts = token.split(".");
  if (parts.length < 2) throw new Error("not a JWT (expected header.payload[.sig])");
  return { header: b64urlJson(parts[0]), payload: b64urlJson(parts[1]) };
}

export const cmd: Command = {
  name: "jwt-decode",
  summary: "Decode a JWT header and payload (no verification)",
  run({ args, stdin }: Ctx): number {
    const token = (args[0] ?? stdin).trim();
    if (!token) { console.error("usage: devkit jwt-decode <token>"); return 1; }
    try {
      const { header, payload } = decodeJwt(token);
      console.log("header: " + JSON.stringify(header, null, 2));
      console.log("payload: " + JSON.stringify(payload, null, 2));
      const exp = (payload as { exp?: number }).exp;
      if (exp) {
        const state = exp * 1000 < Date.now() ? "EXPIRED" : "valid until";
        console.log("exp: " + state + " (" + new Date(exp * 1000).toISOString() + ")");
      }
      return 0;
    } catch (e) {
      console.error((e as Error).message);
      return 1;
    }
  },
};
