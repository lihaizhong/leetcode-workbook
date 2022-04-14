/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  // const 与 let性能相差比较大
  const saver: Set<string> = new Set();
  const size: number = s.length;
  let rk: number = 0;
  let max: number = 0;

  for (let lk = 0; lk < s.length && rk < size; lk++) {
    if (lk !== 0) {
      saver.delete(s.charAt(lk - 1));
    }

    while (rk < size && !saver.has(s.charAt(rk))) {
      saver.add(s.charAt(rk++));
    }

    max = Math.max(saver.size, max);
  }

  return max;
}
// @lc code=end

export default lengthOfLongestSubstring;
