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
  });

  it('Should return addition if numbers saperated by new line(\n) and comma', () => {
    const result = calculate('1\n2,3');
    expect(result).toBe(6);
  })

  it('Should support dynamic delimiters', () => {
    const result = calculate('//;\n1;2');
    expect(result).toBe(3);
  })
});
