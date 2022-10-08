import { sum } from "./sum";

describe("sum()", () => {
  it("ensure the sum returns the correct value", () => {
    expect(sum(1, 3)).toBe(4);
  });
});
