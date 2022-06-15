import convert from "./6.z-字形变换";

describe("z-字形变换", () => {
  it("PAYPALISHIRING-3", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });

  it("PAYPALISHIRING-4", () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });

  it("A-1", () => {
    expect(convert("A", 1)).toBe("A");
  });
});
