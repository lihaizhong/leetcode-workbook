/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-solution/
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 *
 * 方法一：暴力枚举
 * 方法二：哈希表
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
    function twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num1 = nums[i];
            const num2 = target - num1;
            if (map.has(num2)) {
                return [map.get(num2), i];
            }
            map.set(num1, i);
        }
        return [];
    }
    // @lc code=end
    exports.default = twoSum;
});
//# sourceMappingURL=1.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.js.map