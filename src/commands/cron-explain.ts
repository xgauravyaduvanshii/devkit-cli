import type { Command, Ctx } from "../types.js";

const DOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// crond shorthand aliases (Vixie cron): expand before field parsing.
const SHORTHAND: Record<string, string> = {
  "@yearly": "0 0 1 1 *",
  "@annually": "0 0 1 1 *",
  "@monthly": "0 0 1 * *",
  "@weekly": "0 0 * * 0",
  "@daily": "0 0 * * *",
  "@midnight": "0 0 * * *",
  "@hourly": "0 * * * *",
};

export function explainCron(expr: string): string {
  const trimmed = expr.trim();
  const expanded = trimmed.startsWith("@") ? SHORTHAND[trimmed.toLowerCase()] : undefined;
  if (trimmed.startsWith("@") && !expanded) {
    throw new Error("unknown shorthand: " + trimmed + " (known: " + Object.keys(SHORTHAND).join(", ") + ")");
  }
  const f = (expanded ?? trimmed).split(/\s+/);
  if (f.length !== 5) throw new Error("expected 5 fields, got " + f.length);
  const [min, hour, dom, mon, dow] = f;
  const parts: string[] = [];
  parts.push(min === "*" ? "every minute" : min.startsWith("*/") ? "every " + min.slice(2) + " minutes" : "at minute " + min);
  parts.push(hour === "*" ? "every hour" : "at hour " + hour);
  if (dom !== "*") parts.push("on day-of-month " + dom);
  if (mon !== "*") parts.push("in month " + mon);
  if (dow !== "*") parts.push("on " + (DOW[Number(dow)] ? "day names: " + DOW[Number(dow)] : "day-of-week " + dow));
  return parts.join(", ");
}

export const cmd: Command = {
  name: "cron-explain",
  summary: "Explain a 5-field cron expression",
  run({ args, stdin }: Ctx): number {
    const expr = (args.join(" ") || stdin).trim();
    if (!expr) { console.error("usage: devkit cron-explain \"0 9 * * 1\" or @daily"); return 1; }
    try {
      console.log(explainCron(expr));
      return 0;
    } catch (e) {
      console.error((e as Error).message);
      return 1;
    }
  },
};
