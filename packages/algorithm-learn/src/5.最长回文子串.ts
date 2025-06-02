/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode-solution/
 *
 * 给你一个字符串s，找到s中最长的回文子串。
 *
 * 方法一：动态规划（时间复杂度：O(n^2), 空间复杂度：O(n^2)）
 * 方法二：中心扩展算法(时间复杂度：O(n^2), 空间复杂度：O(1))
 * 方法三：Manacher算法
 */

// @lc code=start

/**
 * 获取回文子串
 * @param {string} s
 * @param {number} leftIndex
 * @param {number} rightIndex
 * @returns {string}
 */
function expandAroundCenter(
  s: string,
  leftIndex: number,
  rightIndex: number
): string {
  const len: number = s.length;
  let left: number = leftIndex;
  let right: number = rightIndex;

  while (left >= 0 && right < len && s[left] === s[right]) {
    left = left - 1;
    right = right + 1;
  }

  // 字符串拼接的效率比较低，故在只最后进行截取操作。
  return s.substring(left + 1, right);
}

/**
 * 比较并获取最大的回文子串
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @returns {string}
 */
function max(s1: string, s2: string, s3: string): string {
  return [s1, s2, s3].reduce(
    (l: string, r: string) => (l.length >= r.length ? l : r),
    ""
  );
}

/**
 * 获取最长回文子串
 * @param {string} s
 * @returns {string}
 */
function longestPalindrome(s: string): string {
  const len: number = s.length;
  let maxStr = "";

  if (len < 2) {
    return s;
  }

  for (let i = 0; i < len; i++) {
    // 截取奇数回文串
    const s1: string = expandAroundCenter(s, i, i);
    // 截取偶数回文串
    const s2: string = expandAroundCenter(s, i, i + 1);

    maxStr = max(maxStr, s1, s2);
  }

  return maxStr;
}
// @lc code=end

export default longestPalindrome;
