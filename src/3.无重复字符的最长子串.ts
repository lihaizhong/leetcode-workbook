/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 方法一：滑动窗口
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  // const 与 let性能相差比较大
  const saver: Set<string> = new Set();
  const { length } = s;
  let rk = 0;
  let max = 0;

  for (let lk = 0; lk < s.length && rk < length; lk++) {
    if (lk !== 0) {
      saver.delete(s.charAt(lk - 1));
    }

    while (rk < length && !saver.has(s.charAt(rk))) {
      saver.add(s.charAt(rk++));
    }

    max = Math.max(saver.size, max);
  }

  return max;
}
// @lc code=end

export default lengthOfLongestSubstring;
