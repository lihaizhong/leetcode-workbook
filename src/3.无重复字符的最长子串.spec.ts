import lengthOfLongestSubstring from "./3.无重复字符的最长子串";

describe("无重复字符的最长子串", () => {
  it("abcabcbb", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it("bbbbb", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("pwwkew", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
});
