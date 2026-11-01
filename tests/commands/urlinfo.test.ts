import { describe, it, expect, vi } from "vitest";
import { cmd } from "../src/commands/urlinfo.js";

describe("urlinfo", () => {
  it("smoke: exits 0 and produces expected output", () => {
    const logs: string[] = [];
    const spy = vi.spyOn(console, "log").mockImplementation((m: unknown) => { logs.push(String(m)); });
    const code = cmd.run({ args: ["https://api.example.com:8443/v1/items?x=1#frag"], stdin: "" });
    spy.mockRestore();
    const out = logs.join("\n");
    expect(code).toBe(0);
    expect(out).toContain("host:   api.example.com");
  });
});
