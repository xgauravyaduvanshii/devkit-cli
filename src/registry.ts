import type { Command } from "./types.js";
import { cmd as jsonFmtCmd } from "./commands/json-fmt.js";

const ALL: Command[] = [
  jsonFmtCmd,
];

export function listCommands(): Command[] {
  return ALL;
}

export function getCommand(name: string): Command | undefined {
  return ALL.find((c) => c.name === name);
}
