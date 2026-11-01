import { describe, it, expect, vi } from "vitest";
import { cmd } from "../../src/commands/checksum.js";

describe("checksum", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: [], stdin: "abc" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toContain("ba7816bf8f01cfea 3 bytes");
  });
});
