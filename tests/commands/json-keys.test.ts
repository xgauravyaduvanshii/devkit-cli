import { describe, it, expect, vi } from "vitest";
import { cmd } from "../src/commands/json-keys.js";

describe("json-keys", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: [], stdin: "{\"a\":{\"b\":[1]}}" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toContain("a.b[0]");
  });
});
