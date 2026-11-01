import type { Command } from "./types.js";
import { cmd as jsonFmtCmd } from "./commands/json-fmt.js";
import { cmd as jsonKeysCmd } from "./commands/json-keys.js";
import { cmd as yamlToJsonCmd } from "./commands/yaml-to-json.js";
import { cmd as jsonToYamlCmd } from "./commands/json-to-yaml.js";
import { cmd as csvToJsonCmd } from "./commands/csv-to-json.js";
import { cmd as jwtDecodeCmd } from "./commands/jwt-decode.js";
import { cmd as uuidCmd } from "./commands/uuid.js";
import { cmd as ulidCmd } from "./commands/ulid.js";
import { cmd as slugifyCmd } from "./commands/slugify.js";
import { cmd as caseConvCmd } from "./commands/case-conv.js";
import { cmd as b64Cmd } from "./commands/b64.js";
import { cmd as hashCmd } from "./commands/hash.js";
import { cmd as passgenCmd } from "./commands/passgen.js";
import { cmd as dateconvCmd } from "./commands/dateconv.js";
import { cmd as cronExplainCmd } from "./commands/cron-explain.js";
import { cmd as semverBumpCmd } from "./commands/semver-bump.js";
import { cmd as qstrCmd } from "./commands/qstr.js";
import { cmd as urlinfoCmd } from "./commands/urlinfo.js";
import { cmd as colorconvCmd } from "./commands/colorconv.js";

const ALL: Command[] = [
  jsonFmtCmd,
  jsonKeysCmd,
  yamlToJsonCmd,
  jsonToYamlCmd,
  csvToJsonCmd,
  jwtDecodeCmd,
  uuidCmd,
  ulidCmd,
  slugifyCmd,
  caseConvCmd,
  b64Cmd,
  hashCmd,
  passgenCmd,
  dateconvCmd,
  cronExplainCmd,
  semverBumpCmd,
  qstrCmd,
  urlinfoCmd,
  colorconvCmd,
];

export function listCommands(): Command[] {
  return ALL;
}

export function getCommand(name: string): Command | undefined {
  return ALL.find((c) => c.name === name);
}
