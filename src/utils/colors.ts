const ANSI: Record<string, string> = { red: "31", green: "32", yellow: "33", cyan: "36", bold: "1" };

export function paint(kind: string, text: string): string {
  if (process.env.NO_COLOR) return text;
  const code = ANSI[kind];
  return code ? "\u001B[" + code + "m" + text + "\u001B[0m" : text;
}
