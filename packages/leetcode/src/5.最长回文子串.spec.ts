import longestPalindrome from './5.最长回文子串';

describe("最长回文子串", () => {
  it("a", () => {
    expect(longestPalindrome("a")).toBe("a")
  })

  it("babad", () => {
    expect(longestPalindrome("babad")).toBe("bab")
  })

  it("cbbd", () => {
    expect(longestPalindrome("cbbd")).toBe("bb")
  })

  it("baabebacd", () => {
    expect(longestPalindrome("baabebacd")).toBe("abeba")
  })

  it("aacabdkacaa", () => {
    expect(longestPalindrome("aacabdkacaa")).toBe("aca")
  })
})