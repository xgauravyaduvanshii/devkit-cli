import { describe, it, expect, vi } from "vitest";
import { cmd } from "../src/commands/semver-bump.js";

describe("semver-bump", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: ["minor","1.1.2"], stdin: "" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toContain("1.2.0");
  });
});
