import { describe, it, expect, vi } from "vitest";
import { cmd } from "../src/commands/colorconv.js";

describe("colorconv", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: ["#ff8800"], stdin: "" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toContain("rgb(255, 136, 0)");
  });
});
