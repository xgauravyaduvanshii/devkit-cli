import type { Command, Ctx } from "../types.js";

function splitRow(row: string, sep: string): string[] {
  const QUOTE = String.fromCharCode(34);
  const cells: string[] = [];
  let cur = "";
  let quoted = false;
  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (quoted) {
      if (ch === QUOTE) {
        if (row[i + 1] === QUOTE) { cur += QUOTE; i++; } else quoted = false;
      } else cur += ch;
    } else if (ch === QUOTE) quoted = true;
    else if (ch === sep) { cells.push(cur); cur = ""; }
    else cur += ch;
  }
  cells.push(cur);
  return cells;
}

export function csvToJson(src: string, sep = ","): unknown[] {
  const rows = src.split(/\r?\n/).filter((r) => r.trim().length > 0);
  if (rows.length < 2) return [];
  const head = splitRow(rows[0], sep);
  return rows.slice(1).map((r) => {
    const cells = splitRow(r, sep);
    return Object.fromEntries(head.map((h, i) => [h.trim(), (cells[i] ?? "").trim()]));
  });
}

export const cmd: Command = {
  name: "csv-to-json",
  summary: "Convert CSV (with header) to a JSON array",
  run({ args, stdin }: Ctx): number {
    const src = (args.find((a) => !a.startsWith("--") && a !== "-t") ?? stdin);
    if (!src.trim()) { console.error("no CSV input"); return 1; }
    const sepIdx = args.indexOf("--sep");
    const sep = sepIdx >= 0 ? args[sepIdx + 1] : ",";
    console.log(JSON.stringify(csvToJson(src, sep), null, 2));
    return 0;
  },
};
