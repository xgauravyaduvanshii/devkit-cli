import type { Command } from "./types.js";
import { cmd as jsonFmtCmd } from "./commands/json-fmt.js";
import { cmd as jsonKeysCmd } from "./commands/json-keys.js";
import { cmd as yamlToJsonCmd } from "./commands/yaml-to-json.js";
import { cmd as jsonToYamlCmd } from "./commands/json-to-yaml.js";
import { cmd as csvToJsonCmd } from "./commands/csv-to-json.js";
import { cmd as jwtDecodeCmd } from "./commands/jwt-decode.js";

const ALL: Command[] = [
  jsonFmtCmd,
  jsonKeysCmd,
  yamlToJsonCmd,
  jsonToYamlCmd,
  csvToJsonCmd,
  jwtDecodeCmd,
];

export function listCommands(): Command[] {
  return ALL;
}

export function getCommand(name: string): Command | undefined {
  return ALL.find((c) => c.name === name);
}
