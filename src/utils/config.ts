import fs from "node:fs";

export interface DevkitConfig { indent: number; color: boolean; }

export function loadConfig(file = "devkit.config.json"): DevkitConfig {
  const base: DevkitConfig = { indent: 2, color: true };
  try {
    return { ...base, ...JSON.parse(fs.readFileSync(file, "utf8")) };
  } catch {
    return base;
  }
}
