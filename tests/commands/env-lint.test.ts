import { describe, it, expect, vi } from "vitest";
import { cmd } from "../../src/commands/env-lint.js";

describe("env-lint", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: [], stdin: "API_KEY=abc\nAPI_KEY=def\nBAD KEY=1\n" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toContain("duplicate key: API_KEY");
  });
});
