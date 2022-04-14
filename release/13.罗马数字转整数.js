"use strict";
/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */
// @lc code=start
function romanToInt(s) {
    var _a;
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let result = 0;
    let lastValue = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        const value = (_a = map.get(char)) !== null && _a !== void 0 ? _a : 0;
        result += lastValue < value ? value - 2 * lastValue : value;
        lastValue = value;
    }
    return result;
}
;
// @lc code=end
