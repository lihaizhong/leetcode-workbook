/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  // const 与 let性能相差比较大
  const saver: string[] = [];
  let size: number = 0;

  for (let i = 0; i < s.length; i++) {
    const char: string = s.charAt(i);

    if (saver.includes(char)) {
      const index: number = saver.lastIndexOf(char);

      size = Math.max(saver.length, size);
      saver.splice(0, index + 1);
      // slice性能与splice相差很大
      // saver = saver.slice(index + 1);
    }

    saver.push(char);
  }

  return  Math.max(saver.length, size);
}
// @lc code=end
