import type { Command, Ctx } from "../types.js";

export function bump(kind: string, version: string): string {
  const m = version.match(/^(\d+)\.(\d+)\.(\d+)(.*)$/);
  if (!m) throw new Error("not semver: " + version);
  let [major, minor, patch] = [Number(m[1]), Number(m[2]), Number(m[3])];
  if (kind === "major") { major++; minor = 0; patch = 0; }
  else if (kind === "minor") { minor++; patch = 0; }
  else if (kind === "patch") { patch++; }
  else throw new Error("kind must be major|minor|patch");
  return major + "." + minor + "." + patch;
}

export const cmd: Command = {
  name: "semver-bump",
  summary: "Bump a semantic version",
  run({ args }: Ctx): number {
    const [kind, version] = args;
    if (!kind || !version) { console.error("usage: devkit semver-bump patch 1.2.3"); return 1; }
    try {
      console.log(bump(kind, version));
      return 0;
    } catch (e) {
      console.error((e as Error).message);
      return 1;
    }
  },
};
