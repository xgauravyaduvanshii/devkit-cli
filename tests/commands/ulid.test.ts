import { describe, it, expect, vi } from "vitest";
import { cmd } from "../../src/commands/ulid.js";

describe("ulid", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: [], stdin: "" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toMatch(new RegExp("^[0-9A-HJKMNP-TV-Z]{26}$"));
  });
});
