import findMedianSortedArrays from "./4.寻找两个正序数组的中位数";

describe("寻找两个正序数组的中位数", () => {
  it("[1,3], [2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  it("[], [1]", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
  });

  it("[1,2], [3,4,5,6,7,8,9]", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4, 5, 6, 7, 8, 9])).toBe(5);
  });

  it("[1,2,3,4], [5,6,7,8]", () => {
    expect(findMedianSortedArrays([1, 2, 3, 4], [5, 6, 7, 8])).toBe(4.5);
  });

  it("[1,3,6,7,8], [2,4,5,9]", () => {
    expect(findMedianSortedArrays([1, 3, 6, 7, 8], [2, 4, 5, 9])).toBe(5);
  });

  it("[1,3,6,7,8], [2,4,5]", () => {
    expect(findMedianSortedArrays([1, 3, 6, 7, 8], [2, 4, 5])).toBe(4.5);
  });

  it("[3], [-2, -1]", () => {
    expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1);
  })
});
