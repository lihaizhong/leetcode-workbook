/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 *
 * 方法一：二分查找
 * 方法二：划分数组
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
    function findMedianSortedArrays(nums1, nums2) {
        let n1;
        let n2;
        if (nums1.length > nums2.length) {
            n1 = nums2;
            n2 = nums1;
        }
        else {
            n1 = nums1;
            n2 = nums2;
        }
        const m = n1.length;
        const n = n2.length;
        const totalLeft = Math.floor((m + n + 1) / 2);
        let left = 0;
        let right = m;
        while (left < right) {
            const i = left + Math.floor((right - left + 1) / 2);
            const j = totalLeft - i;
            if (n1[i - 1] > n2[j]) {
                right = i - 1;
            }
            else {
                left = i;
            }
        }
        const i = left;
        const j = totalLeft - i;
        const num1LeftMax = i === 0 ? Number.MIN_SAFE_INTEGER : n1[i - 1];
        const num1RightMin = i === m ? Number.MAX_SAFE_INTEGER : n1[i];
        const num2LeftMax = j === 0 ? Number.MIN_SAFE_INTEGER : n2[j - 1];
        const num2RightMin = j === n ? Number.MAX_SAFE_INTEGER : n2[j];
        // 若除不尽，表示为奇数个子元素
        return (m + n) % 2 === 1
            ? Math.max(num1LeftMax, num2LeftMax)
            : (Math.max(num1LeftMax, num2LeftMax) +
                Math.min(num1RightMin, num2RightMin)) /
                2;
    }
    // @lc code=end
    exports.default = findMedianSortedArrays;
});
//# sourceMappingURL=4.%E5%AF%BB%E6%89%BE%E4%B8%A4%E4%B8%AA%E6%AD%A3%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0.js.map