/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    const tmp: number[] = nums1;

    nums1 = nums2;
    nums2 = tmp;
  }

  let m: number = nums1.length;
  let n: number = nums2.length;

  const totalLeft: number = Math.floor((m + n + 1) / 2);

  let left: number = 0;
  let right: number = m;

  while (left < right) {
    const i: number = left + Math.floor((right - left + 1) / 2);
    const j: number = totalLeft - i;

    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      left = i;
    }
  }

  const i: number = left;
  const j: number = totalLeft - i;

  const num1LeftMax: number = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
  const num1RightMin: number = i === m ? Number.MAX_SAFE_INTEGER : nums1[i];
  const num2LeftMax: number = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
  const num2RightMin: number = j === n ? Number.MAX_SAFE_INTEGER : nums2[j];

  // 若除不尽，表示为奇数个子元素
  return (m + n) % 2 === 1
    ? Math.max(num1LeftMax, num2LeftMax)
    : (Math.max(num1LeftMax, num2LeftMax) +
        Math.min(num1RightMin, num2RightMin)) /
        2;
}
// @lc code=end

export default findMedianSortedArrays;
