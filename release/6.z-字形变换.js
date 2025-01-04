/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */
// @lc code=start
function convert(s, numRows) {
    if (numRows < 1) {
        return s;
    }
    const len = s.length;
    const oneCycle = 2 * numRows - 2;
    const n = Math.ceil(len / oneCycle);
    let zStr = "";
    for (let i = 0; i < len; i++) {
        let c;
        if (i < n) {
            c = s.charAt(oneCycle * i);
        }
        else if (i >= (numRows - 1) * n) {
            c = s.charAt(oneCycle * (i - (numRows - 1) * n) + numRows - 1);
        }
        else {
            if ((i % oneCycle) % 2 === 0) {
                const r = oneCycle * (i / 2 - (numRows - 1) * n);
                c = s.charAt(oneCycle * (n - 1) + r);
            }
            else {
                const r = 2 * oneCycle - 2 - (i % oneCycle); // error
                c = s.charAt(oneCycle * n - r);
            }
        }
        if (typeof c === "string") {
            zStr += c;
        }
    }
    return zStr;
}
// @lc code=end
export default convert;
