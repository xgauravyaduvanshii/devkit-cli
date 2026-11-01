import type { Command, Ctx } from "../types.js";

export function convertDate(input: string): { iso: string; unix: number } {
  const d = /^\d+$/.test(input)
    ? new Date(Number(input) * (input.length > 10 ? 1 : 1000))
    : new Date(input);
  if (Number.isNaN(d.getTime())) throw new Error("unparseable date: " + input);
  return { iso: d.toISOString(), unix: Math.floor(d.getTime() / 1000) };
}

export const cmd: Command = {
  name: "dateconv",
  summary: "Convert between unix timestamps and ISO 8601",
  run({ args, stdin }: Ctx): number {
    const input = (args[0] ?? stdin).trim();
    if (!input) { console.error("usage: devkit dateconv <value>"); return 1; }
    try {
      const r = convertDate(input);
      console.log("iso:   " + r.iso);
      console.log("unix:  " + r.unix);
      return 0;
    } catch (e) {
      console.error((e as Error).message);
      return 1;
    }
  },
};
