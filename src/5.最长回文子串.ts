/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const len: number = s.length;
  let str: string = "";

  for (let i: number = 0; i < len; i++) {
    const source: string = s[i];

    for (let j: number = len - 1; j > i; j++) {
      const target: string = s[j];

      if (source === target) {
        for (let k: number = i + 1; k < j - i - 1; k += 2) {
          const a: string = s[k];
          const b: string = s[k - 1];

          if (a !== b) {
            break;
          }
        }

        const tmp: string = s.slice(i, j - i);
  
        if (tmp.length > str.length) {
          str = tmp
        }
      }
    }
  }

  return str;
}
// @lc code=end

export default longestPalindrome;
