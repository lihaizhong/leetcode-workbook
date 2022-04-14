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
    const i: number = Math.floor((right - left + 1) / 2);
    const j: number = totalLeft - i;

    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      left = i;
    }
  }

  const i: number = left;
  const j: number = totalLeft - left;

  const minNum1: number = nums1[i - 1] ?? Number.MAX_VALUE;
  const maxNum1: number = nums1[i] ?? Number.MAX_VALUE;
  const minNum2: number = nums2[j - 1] ?? Number.MAX_VALUE;
  const maxNum2: number = nums2[j] ?? Number.MAX_VALUE;

  console.log(i, j, minNum1, maxNum1, minNum2, maxNum2);

  // 若除不尽，表示为奇数个子元素
  return (m + n) % 2 === 1
    ? Math.min(minNum1, maxNum2)
    : (Math.min(maxNum1, minNum2) + Math.min(minNum1, maxNum2)) / 2;
}
// @lc code=end

export default findMedianSortedArrays;
