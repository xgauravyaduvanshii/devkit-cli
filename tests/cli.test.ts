import { describe, it, expect } from "vitest";
import { listCommands } from "../src/registry.js";

describe("cli surface", () => {
  it("registry exposes summaries for every command", () => {
    const all = listCommands();
    expect(all.length).toBeGreaterThan(20);
    for (const c of all) expect(c.summary.length).toBeGreaterThan(4);
  });
});
