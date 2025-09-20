import { sum } from "../functions/index";

describe("sum function", () => {
  it("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
