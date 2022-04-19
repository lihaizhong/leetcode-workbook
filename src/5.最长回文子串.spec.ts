import longestPalindrome from './5.最长回文子串';

describe("最长回文子串", () => {
  it("babad", () => {
    expect(longestPalindrome("babad")).toBe("bab")
  })

  it("cbbd", () => {
    expect(longestPalindrome("cbbd")).toBe("bb")
  })
})