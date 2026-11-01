import { describe, it, expect, vi } from "vitest";
import { cmd } from "../src/commands/passgen.js";

describe("passgen", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: ["--length","20"], stdin: "" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toMatch(new RegExp("^[A-Za-z0-9]{20}$"));
  });
});
