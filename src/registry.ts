import type { Command } from "./types.js";
import { cmd as jsonFmtCmd } from "./commands/json-fmt.js";
import { cmd as jsonKeysCmd } from "./commands/json-keys.js";

const ALL: Command[] = [
  jsonFmtCmd,
  jsonKeysCmd,
];

export function listCommands(): Command[] {
  return ALL;
}

export function getCommand(name: string): Command | undefined {
  return ALL.find((c) => c.name === name);
}
