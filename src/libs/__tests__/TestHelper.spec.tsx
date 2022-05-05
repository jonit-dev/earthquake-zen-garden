import { TestHelper } from "../TestHelper";

describe("TestHelper.ts", () => {
  const testHelper = new TestHelper();

  it("should properly run the sum function", () => {
    const sum = testHelper.sum(1, 1);

    expect(sum).toBe(2);
  });
});
