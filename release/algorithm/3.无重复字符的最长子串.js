"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lengthOfLongestSubstring(s) {
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
exports.default = lengthOfLongestSubstring;
//# sourceMappingURL=3.%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.js.map