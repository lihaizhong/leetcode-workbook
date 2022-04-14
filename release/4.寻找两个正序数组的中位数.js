/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */
// @lc code=start
function findMedianSortedArrays(nums1, nums2) {
    var _a, _b, _c, _d;
    if (nums1.length > nums2.length) {
        const tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }
    let m = nums1.length;
    let n = nums2.length;
    const totalLeft = Math.floor((m + n + 1) / 2);
    let left = 0;
    let right = m;
    while (left < right) {
        const i = Math.floor((right - left + 1) / 2);
        const j = totalLeft - i;
        if (nums1[i - 1] > nums2[j]) {
            right = i - 1;
        }
        else {
            left = i;
        }
    }
    const i = left;
    const j = totalLeft - left;
    const minNum1 = (_a = nums1[i - 1]) !== null && _a !== void 0 ? _a : Number.MAX_VALUE;
    const maxNum1 = (_b = nums1[i]) !== null && _b !== void 0 ? _b : Number.MAX_VALUE;
    const minNum2 = (_c = nums2[j - 1]) !== null && _c !== void 0 ? _c : Number.MAX_VALUE;
    const maxNum2 = (_d = nums2[j]) !== null && _d !== void 0 ? _d : Number.MAX_VALUE;
    console.log(i, j, minNum1, maxNum1, minNum2, maxNum2);
    // 若除不尽，表示为奇数个子元素
    return (m + n) % 2 === 1
        ? Math.min(minNum1, maxNum2)
        : (Math.min(maxNum1, minNum2) + Math.min(minNum1, maxNum2)) / 2;
}
// @lc code=end
export default findMedianSortedArrays;
