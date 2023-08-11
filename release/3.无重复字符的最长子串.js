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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.default = lengthOfLongestSubstring;
});
//# sourceMappingURL=3.%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.js.map