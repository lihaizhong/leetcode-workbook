import romanToInt from "./13.罗马数字转整数";

describe("罗马数字转整数", () => {
  it("III", () => {
    expect(romanToInt("III")).toBe(3);
  });

  it("IV", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  it("IX", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  it("LVIII", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("MCMXCIV", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
