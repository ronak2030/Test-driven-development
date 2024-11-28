const calculate = require("./calculator");

describe("String Calculator", () => {
  it('Should return 0 if input is empty string', () => {
    const result = calculate("");
    expect(result).toBe(0);
  });

  it('Should return the number itself when one number is provided', () => {
    const result = calculate("5");
    expect(result).toBe(5);
  });

  it('Should return addition of comma saperated two numbers', () => {
    const result = calculate("1,2");
    expect(result).toBe(3);
  })
});
