import { randomBytes } from "node:crypto";
import type { Command } from "../types.js";

const ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

function encode(value: bigint, length: number): string {
  let out = "";
  let v = value;
  for (let i = 0; i < length; i++) {
    out = ALPHABET[Number(v & 31n)] + out;
    v >>= 5n;
  }
  return out;
}

export function makeUlid(now = Date.now()): string {
  const time = encode(BigInt(now), 10);
  const rand = randomBytes(10);
  let bits = 0n;
  for (const b of rand) bits = (bits << 8n) | BigInt(b);
  return time + encode(bits, 16);
}

export const cmd: Command = {
  name: "ulid",
  summary: "Generate a ULID (Crockford base32, sortable)",
  run(): number {
    console.log(makeUlid());
    return 0;
  },
};
