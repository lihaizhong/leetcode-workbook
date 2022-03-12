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

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let n1: number[];
  let n2: number[];

  if (nums1.length > nums2.length) {
    n1 = nums2;
    n2 = nums1;
  } else {
    n1 = nums1;
    n2 = nums2;
  }

  const m: number = n1.length;
  const n: number = n2.length;

  const totalLeft: number = Math.floor((m + n + 1) / 2);

  let left = 0;
  let right: number = m;

  while (left < right) {
    const i: number = left + Math.floor((right - left + 1) / 2);
    const j: number = totalLeft - i;

    if (n1[i - 1] > n2[j]) {
      right = i - 1;
    } else {
      left = i;
    }
  }

  const i: number = left;
  const j: number = totalLeft - i;

  const num1LeftMax: number = i === 0 ? Number.MIN_SAFE_INTEGER : n1[i - 1];
  const num1RightMin: number = i === m ? Number.MAX_SAFE_INTEGER : n1[i];
  const num2LeftMax: number = j === 0 ? Number.MIN_SAFE_INTEGER : n2[j - 1];
  const num2RightMin: number = j === n ? Number.MAX_SAFE_INTEGER : n2[j];

  // 若除不尽，表示为奇数个子元素
  return (m + n) % 2 === 1
    ? Math.max(num1LeftMax, num2LeftMax)
    : (Math.max(num1LeftMax, num2LeftMax) +
        Math.min(num1RightMin, num2RightMin)) /
        2;
}
// @lc code=end

export default findMedianSortedArrays;
