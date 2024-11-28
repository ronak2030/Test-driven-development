const calculate = require("./calculator");

describe("String Calculator", () => {
  it("Should return 0 if input is empty string", () => {
    const result = calculate("");
    expect(result).toBe(0);
  });
});
