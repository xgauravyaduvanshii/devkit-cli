import { describe, it, expect } from "vitest";
import { paint } from "../../src/utils/colors.js";

describe("colors", () => {
  it("wraps in ANSI when color is allowed", () => {
    delete process.env.NO_COLOR;
    expect(paint("red", "x")).toContain("x");
  });
  it("respects NO_COLOR", () => {
    process.env.NO_COLOR = "1";
    expect(paint("red", "x")).toBe("x");
    delete process.env.NO_COLOR;
  });
});
