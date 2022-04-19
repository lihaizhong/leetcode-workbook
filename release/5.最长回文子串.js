/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */
// @lc code=start
function longestPalindrome(s) {
    const len = s.length;
    let str = "";
    for (let i = 0; i < len; i++) {
        const source = s[i];
        for (let j = len - 1; j > i; j--) {
            const target = s[j];
            if (source === target) {
                let matched = true;
                for (let k = i + 1; k < j - i - 1; k += 2) {
                    const a = s[k];
                    // 坐标内敛
                    // k = i + 1
                    // m = j - 1
                    // => k - i = j - m
                    // => m = j - k + i
                    const b = s[j - k + i];
                    if (a !== b) {
                        matched = false;
                        break;
                    }
                }
                if (matched) {
                    const tmp = s.slice(i, j + 1);
                    if (tmp.length > str.length) {
                        str = tmp;
                    }
                }
            }
        }
    }
    return str;
}
// @lc code=end
export default longestPalindrome;
