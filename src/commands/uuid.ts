import { randomUUID } from "node:crypto";
import type { Command, Ctx } from "../types.js";

export function makeUuids(count: number): string[] {
  return Array.from({ length: count }, () => randomUUID());
}

export const cmd: Command = {
  name: "uuid",
  summary: "Generate RFC 4122 v4 UUIDs",
  run({ args }: Ctx): number {
    const idx = args.indexOf("--count");
    const count = idx >= 0 ? Math.min(Number(args[idx + 1]) || 1, 1000) : 1;
    for (const id of makeUuids(count)) console.log(id);
    return 0;
  },
};
