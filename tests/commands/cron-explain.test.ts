import { describe, it, expect, vi } from "vitest";
import { cmd, explainCron } from "../../src/commands/cron-explain.js";

describe("cron-explain", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: ["0 9 * * 1"], stdin: "" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toContain("hour 9");
  });

  it("expands crond shorthands (#11)", () => {
    expect(explainCron("@daily")).toContain("at minute 0, at hour 0");
    expect(explainCron("@hourly")).toContain("at minute 0, every hour");
    expect(() => explainCron("@nonsense")).toThrow(/unknown shorthand/);
  });
});
