/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */
// @lc code=start
function lengthOfLongestSubstring(s) {
    // const 与 let性能相差比较大
    const saver = new Set();
    const size = s.length;
    let rk = 0;
    let max = 0;
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
