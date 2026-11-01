import { describe, it, expect, vi } from "vitest";
import { fail } from "../../src/utils/logger.js";

describe("logger", () => {
  it("fail returns exit code 1 and logs to stderr", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(fail("boom")).toBe(1);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
