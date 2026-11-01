import { describe, it, expect, vi } from "vitest";
import { cmd } from "../src/commands/json-fmt.js";

describe("json-fmt", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: [], stdin: "{\"b\":2,\"a\":{\"c\":[1,2]}}" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toContain("\"c\": [1, 2]");
  });
});
