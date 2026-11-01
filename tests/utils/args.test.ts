import { describe, it, expect } from "vitest";
import { flagValue, positional } from "../../src/utils/args.js";

describe("args", () => {
  it("reads flag values", () => {
    expect(flagValue(["--indent", "4"], "--indent")).toBe("4");
    expect(flagValue([], "--x", "d")).toBe("d");
  });
  it("splits positionals", () => {
    expect(positional(["--flag", "keep", "--on"])).toEqual(["keep"]);
  });
});
